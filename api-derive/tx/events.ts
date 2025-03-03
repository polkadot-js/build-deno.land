
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { EventRecord, Hash, SignedBlock } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi } from '../types.ts';

import { combineLatest, map, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

interface Result {
  block: SignedBlock;
  events: EventRecord[];
}

/**
 * @name events
 * @param {Hash} at Block hash to query at.
 * @description Retrieves the block information alongside its events at a given block hash
 * @example
 * ```javascript
 * const blockHash = api.registry.createType(
 *   "Hash",
 *   "0xf1dc2efe8265be67deea5e91b05a98a7f9f81f66854e92825cf36f541beb7af6"
 * );
 * const { events, block } = await api.derive.tx.events(blockHash);
 * ```
 */
export function events (instanceId: string, api: DeriveApi): (at: Hash) => Observable<Result> {
  return memo(instanceId, (blockHash: Hash) =>
    combineLatest([
      api.rpc.chain.getBlock(blockHash),
      api.queryAt(blockHash).pipe(
        switchMap((queryAt) =>
          queryAt.system.events()
        )
      )
    ]).pipe(
      map(([block, events]) => ({ block, events }))
    )
  );
}
