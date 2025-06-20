
import type RpcError from '../coder/error.ts';
import type { JsonRpcResponse, ProviderInterface, ProviderInterfaceCallback, ProviderInterfaceEmitCb, ProviderInterfaceEmitted, ProviderStats } from '../types.ts';

import { logger, noop, stringify } from 'https://deno.land/x/polkadot/util/mod.ts';
import { fetch } from 'https://deno.land/x/polkadot/x-fetch/mod.ts';

import { RpcCoder } from '../coder/index.ts';
import defaults from '../defaults.ts';
import { DEFAULT_CAPACITY, DEFAULT_TTL, LRUCache } from '../lru.ts';

const ERROR_SUBSCRIBE = 'HTTP Provider does not have subscriptions, use WebSockets instead';

const l = logger('api-http');

/**
 * # @polkadot/rpc-provider
 *
 * @name HttpProvider
 *
 * @description The HTTP Provider allows sending requests using HTTP to a HTTP RPC server TCP port. It does not support subscriptions so you won't be able to listen to events such as new blocks or balance changes. It is usually preferable using the [[WsProvider]].
 *
 * @example
 * <BR>
 *
 * ```javascript
 * import Api from 'https://deno.land/x/polkadot/api/promise/index.ts';
 * import { HttpProvider } from 'https://deno.land/x/polkadot/rpc-provider/mod.ts';
 *
 * const provider = new HttpProvider('http://127.0.0.1:9933');
 * const api = new Api(provider);
 * ```
 *
 * @see [[WsProvider]]
 */
export class HttpProvider implements ProviderInterface {
  readonly #callCache: LRUCache;
  readonly #cacheCapacity: number;
  readonly #coder: RpcCoder;
  readonly #endpoint: string;
  readonly #headers: Record<string, string>;
  readonly #stats: ProviderStats;
  readonly #ttl: number | null | undefined;

  /**
   * @param {string} endpoint The endpoint url starting with http://
   * @param {Record<string, string>} headers The headers provided to the underlying Http Endpoint
   * @param {number} [cacheCapacity] Custom size of the HttpProvider LRUCache. Defaults to `DEFAULT_CAPACITY` (1024)
   * @param {number} [cacheTtl] Custom TTL of the HttpProvider LRUCache. Determines how long an object can live in the cache. Defaults to `DEFAULT_TTL` (30000)
   */
  constructor (endpoint: string = defaults.HTTP_URL, headers: Record<string, string> = {}, cacheCapacity?: number, cacheTtl?: number | null) {
    if (!/^(https|http):\/\//.test(endpoint)) {
      throw new Error(`Endpoint should start with 'http://' or 'https://', received '${endpoint}'`);
    }

    this.#coder = new RpcCoder();
    this.#endpoint = endpoint;
    this.#headers = headers;
    this.#cacheCapacity = cacheCapacity === 0 ? 0 : cacheCapacity || DEFAULT_CAPACITY;

    const ttl = cacheTtl === undefined ? DEFAULT_TTL : cacheTtl;

    this.#callCache = new LRUCache(cacheCapacity === 0 ? 0 : cacheCapacity || DEFAULT_CAPACITY, ttl);
    this.#ttl = cacheTtl;

    this.#stats = {
      active: { requests: 0, subscriptions: 0 },
      total: { bytesRecv: 0, bytesSent: 0, cached: 0, errors: 0, requests: 0, subscriptions: 0, timeout: 0 }
    };
  }

  /**
   * @summary `true` when this provider supports subscriptions
   */
  public get hasSubscriptions (): boolean {
    return !!false;
  }

  /**
   * @description Returns a clone of the object
   */
  public clone (): HttpProvider {
    return new HttpProvider(this.#endpoint, this.#headers);
  }

  /**
   * @description Manually connect from the connection
   */
  public async connect (): Promise<void> {
    // noop
  }

  /**
   * @description Manually disconnect from the connection
   */
  public async disconnect (): Promise<void> {
    // noop
  }

  /**
   * @description Returns the connection stats
   */
  public get stats (): ProviderStats {
    return this.#stats;
  }

  /**
  * @description Returns the connection stats
  */
  public get ttl (): number | null | undefined {
    return this.#ttl;
  }

  /**
   * @summary `true` when this provider supports clone()
   */
  public get isClonable (): boolean {
    return !!true;
  }

  /**
   * @summary Whether the node is connected or not.
   * @return {boolean} true if connected
   */
  public get isConnected (): boolean {
    return !!true;
  }

  /**
   * @summary Events are not supported with the HttpProvider, see [[WsProvider]].
   * @description HTTP Provider does not have 'on' emitters. WebSockets should be used instead.
   */
  public on (_type: ProviderInterfaceEmitted, _sub: ProviderInterfaceEmitCb): () => void {
    l.error('HTTP Provider does not have \'on\' emitters, use WebSockets instead');

    return noop;
  }

  /**
   * @summary Send HTTP POST Request with Body to configured HTTP Endpoint.
   */
  public async send <T> (method: string, params: unknown[], isCacheable?: boolean): Promise<T> {
    this.#stats.total.requests++;

    const [, body] = this.#coder.encodeJson(method, params);

    if (this.#cacheCapacity === 0) {
      return this.#send(body);
    }

    const cacheKey = isCacheable ? `${method}::${stringify(params)}` : '';
    let resultPromise: Promise<T> | null = isCacheable
      ? this.#callCache.get(cacheKey)
      : null;

    if (!resultPromise) {
      resultPromise = this.#send(body);

      if (isCacheable) {
        this.#callCache.set(cacheKey, resultPromise);
      }
    } else {
      this.#stats.total.cached++;
    }

    return resultPromise;
  }

  async #send <T> (body: string): Promise<T> {
    this.#stats.active.requests++;
    this.#stats.total.bytesSent += body.length;

    try {
      const response = await fetch(this.#endpoint, {
        body,
        headers: {
          Accept: 'application/json',
          'Content-Length': `${body.length}`,
          'Content-Type': 'application/json',
          ...this.#headers
        },
        method: 'POST'
      });

      if (!response.ok) {
        throw new Error(`[${response.status}]: ${response.statusText}`);
      }

      const result = await response.text();

      this.#stats.total.bytesRecv += result.length;

      const decoded = this.#coder.decodeResponse(JSON.parse(result) as JsonRpcResponse<T>);

      this.#stats.active.requests--;

      return decoded;
    } catch (e) {
      this.#stats.active.requests--;
      this.#stats.total.errors++;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { method, params } = JSON.parse(body);

      const rpcError: RpcError = e as RpcError;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const failedRequest = `\nFailed HTTP Request: ${JSON.stringify({ method, params })}`;

      // Provide HTTP Request alongside the error
      rpcError.message = `${rpcError.message}${failedRequest}`;

      throw rpcError;
    }
  }

  /**
   * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  public async subscribe (_types: string, _method: string, _params: unknown[], _cb: ProviderInterfaceCallback): Promise<number> {
    l.error(ERROR_SUBSCRIBE);

    throw new Error(ERROR_SUBSCRIBE);
  }

  /**
   * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  public async unsubscribe (_type: string, _method: string, _id: number): Promise<boolean> {
    l.error(ERROR_SUBSCRIBE);

    throw new Error(ERROR_SUBSCRIBE);
  }
}
