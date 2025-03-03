
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { AnyNumber } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { SignedBlockExtended } from '../type/types.ts';
import type { DeriveApi } from '../types.ts';

import { switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

/**
 * @name getBlockByNumber
 * @param {( BN | bigint | Uint8Array | number | string )} blockNumber
 * @description Get a specific block (e.g. rpc.chain.getBlock) and extend it with the author by block number
 * @example
 * ```javascript
 * const { author, block } = await api.derive.chain.getBlockByNumber(123);
 *
 * console.log(`block #${block.header.number} was authored by ${author}`);
 * ```
 */
export function getBlockByNumber (instanceId: string, api: DeriveApi): (blockNumber: AnyNumber) => Observable<SignedBlockExtended> {
  return memo(instanceId, (blockNumber: AnyNumber): Observable<SignedBlockExtended> =>
    api.rpc.chain.getBlockHash(blockNumber).pipe(
      switchMap((h) => api.derive.chain.getBlock(h))
    )
  );
}
