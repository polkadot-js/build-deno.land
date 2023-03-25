
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { EventRecord, Hash, SignedBlock } from 'https://deno.land/x/polkadot@0.2.33/types/interfaces/index.ts';
import type { DeriveApi } from '../types.ts';

import { combineLatest, map, switchMap } from 'https://esm.sh/rxjs@7.8.0';

import { memo } from '../util/index.ts';

interface Result {
  block: SignedBlock;
  events: EventRecord[];
}

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
