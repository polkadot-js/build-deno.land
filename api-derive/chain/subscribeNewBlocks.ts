
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { SignedBlockExtended } from '../type/types.ts';
import type { DeriveApi } from '../types.ts';

import { mergeMap } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

/**
 * @name subscribeNewBlocks
 * @returns The latest block & events for that block
 * @example
 * ```javascript
 * const unsub = await api.derive.chain.subscribeNewBlocks((newBlock) => {
 *   console.log(`Block Hash: ${newBlock.hash}`);
 * });
 * ```
 */
export function subscribeNewBlocks (instanceId: string, api: DeriveApi): () => Observable<SignedBlockExtended> {
  return memo(instanceId, (): Observable<SignedBlockExtended> =>
    api.derive.chain.subscribeNewHeads().pipe(
      mergeMap((header) =>
        api.derive.chain.getBlock(header.createdAtHash || header.hash)
      )
    )
  );
}
