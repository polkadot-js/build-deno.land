
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { AccountId } from 'https://deno.land/x/polkadot@0.2.36/types/interfaces/index.ts';
import type { DeriveApi, DeriveCouncilVote } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.8.0';

import { memo } from '../util/index.ts';

export function votesOf (instanceId: string, api: DeriveApi): (accountId: string | Uint8Array | AccountId) => Observable<DeriveCouncilVote> {
  return memo(instanceId, (accountId: string | Uint8Array | AccountId): Observable<DeriveCouncilVote> =>
    api.derive.council.votes().pipe(
      map((votes): DeriveCouncilVote =>
        (
          votes.find(([from]) => from.eq(accountId)) ||
          [null, { stake: api.registry.createType('Balance'), votes: [] as AccountId[] }]
        )[1]
      )
    )
  );
}
