
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Option, u32, Vec } from 'https://deno.land/x/polkadot@0.2.45/types/mod.ts';
import type { AccountId, BalanceOf } from 'https://deno.land/x/polkadot@0.2.45/types/interfaces/index.ts';
import type { PalletSocietyBid } from 'https://deno.land/x/polkadot@0.2.45/types/lookup.ts';
import type { DeriveApi, DeriveSociety } from '../types.ts';

import { combineLatest, map, of } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

type Result = [Vec<PalletSocietyBid>, Option<AccountId> | undefined, Option<AccountId>, Option<AccountId>, u32 | undefined, BalanceOf]

/**
 * @description Get the overall info for a society
 */
export function info (instanceId: string, api: DeriveApi): () => Observable<DeriveSociety> {
  return memo(instanceId, (): Observable<DeriveSociety> =>
    combineLatest<Result>([
      api.query.society.bids(),
      api.query.society['defender']
        ? api.query.society['defender']<Option<AccountId>>()
        : of(undefined),
      api.query.society.founder(),
      api.query.society.head(),
      api.query.society['maxMembers']
        ? api.query.society['maxMembers']<u32>()
        : of(undefined),
      api.query.society.pot()
    ]).pipe(
      map(([bids, defender, founder, head, maxMembers, pot]: Result): DeriveSociety => ({
        bids,
        defender: defender?.unwrapOr(undefined),
        founder: founder.unwrapOr(undefined),
        hasDefender: (defender?.isSome && head.isSome && !head.eq(defender)) || false,
        head: head.unwrapOr(undefined),
        maxMembers,
        pot
      }))
    )
  );
}
