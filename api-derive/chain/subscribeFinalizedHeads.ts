
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Hash, Header } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi } from '../types.ts';

import { from, of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

/**
 * Returns a header range from startHash to to (not including) endHash, i.e. lastBlock.parentHash === endHash
 */
export function _getHeaderRange (instanceId: string, api: DeriveApi): (startHash: Hash, endHash: Hash, prev?: Header[]) => Observable<Header[]> {
  return memo(instanceId, (startHash: Hash, endHash: Hash, prev: Header[] = []): Observable<Header[]> =>
    api.rpc.chain.getHeader(startHash).pipe(
      switchMap((header) =>
        header.parentHash.eq(endHash)
          ? of([header, ...prev])
          : api.derive.chain._getHeaderRange(header.parentHash, endHash, [header, ...prev])
      )
    )
  );
}

/**
 * @name subscribeFinalizedHeads
 * @description An observable of the finalized block headers. Unlike the base
 * chain.subscribeFinalizedHeads this does not skip any headers. Since finalization
 * may skip specific blocks (finalization happens in terms of chains), this version
 * of the derive tracks missing headers (since last retrieved) and provides them
 * to the caller.
 * @example
 * ```javascript
 * const unsub = await api.derive.chain.subscribeFinalizedHeads((finalizedHead) => {
 *   console.log(`${finalizedHead.hash}`);
 * });
 * ```
 */
export function subscribeFinalizedHeads (instanceId: string, api: DeriveApi): () => Observable<Header> {
  return memo(instanceId, (): Observable<Header> => {
    let prevHash: Hash | null = null;

    return api.rpc.chain.subscribeFinalizedHeads().pipe(
      switchMap((header) => {
        const endHash = prevHash;
        const startHash = header.parentHash;

        prevHash = header.createdAtHash = header.hash;

        return endHash === null || startHash.eq(endHash)
          ? of(header)
          : api.derive.chain._getHeaderRange(startHash, endHash, [header]).pipe(
            switchMap((headers) =>
              from(headers)
            )
          );
      })
    );
  });
}
