
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { ProviderInterface } from 'https://deno.land/x/polkadot/rpc-provider/types.ts';
import type { AnyFunction, Codec, DefinitionRpc } from 'https://deno.land/x/polkadot/types/types/index.ts';

export interface RpcInterfaceMethod {
  <T extends Codec> (...params: unknown[]): Observable<T>;
  raw (...params: unknown[]): Observable<unknown>;
  meta: DefinitionRpc;
}

export type AugmentedRpc<F extends AnyFunction> = F & {
  raw: <T> (...params: Parameters<F>) => Observable<T>;
  meta: DefinitionRpc;
};

/** Stats from the rpc-core layer, including the provider stats */
export interface RpcCoreStats extends NonNullable<ProviderInterface['stats']> {
  /** Internal stats for the rpc-core layer */
  core: {
    /** The number of values retrieved from the core cache */
    cacheHits: number;
    /** The number of entries in the core cache */
    cacheSize: number;
  }
}
