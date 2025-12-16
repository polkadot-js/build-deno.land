
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { SignedBlockExtended } from '../type/types.ts';
import type { DeriveApi } from '../types.ts';

import { mergeMap } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

/**
 * @name subscribeFinalizedBlocks
 * @description Retrieves the finalized block & events for that block
 * @example
 * ```javascript
 * const unsub = await api.derive.chain.subscribeFinalizedBlocks((finalizedBlock) => {
 *  console.log(`# Finalized block ${finalizedBlock.block.hash}`);
 * });
 * ```
 */
export function subscribeFinalizedBlocks (instanceId: string, api: DeriveApi): () => Observable<SignedBlockExtended> {
  return memo(instanceId, (): Observable<SignedBlockExtended> =>
    api.derive.chain.subscribeFinalizedHeads().pipe(
      mergeMap((header) =>
        api.derive.chain.getBlock(header.createdAtHash || header.hash)
      )
    )
  );
}
