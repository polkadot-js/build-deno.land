// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.6';
import type { Option, u32, Vec } from 'https://deno.land/x/polkadot@0.0.9/types/mod.ts';
import type { AccountId, BalanceOf } from 'https://deno.land/x/polkadot@0.0.9/types/interfaces/index.ts';
import type { PalletSocietyBid } from 'https://deno.land/x/polkadot@0.0.9/types/lookup.ts';
import type { DeriveApi, DeriveSociety } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.5.6';

import { memo } from '../util/index.ts';

type Result = [Vec<PalletSocietyBid>, Option<AccountId>, Option<AccountId>, Option<AccountId>, u32, BalanceOf]

/**
 * @description Get the overall info for a society
 */
export function info (instanceId: string, api: DeriveApi): () => Observable<DeriveSociety> {
  return memo(instanceId, (): Observable<DeriveSociety> =>
    api.queryMulti<Result>([
      api.query.society.bids,
      api.query.society.defender,
      api.query.society.founder,
      api.query.society.head,
      api.query.society.maxMembers,
      api.query.society.pot
    ]).pipe(
      map(([bids, defender, founder, head, maxMembers, pot]: Result): DeriveSociety => ({
        bids,
        defender: defender.unwrapOr(undefined),
        founder: founder.unwrapOr(undefined),
        hasDefender: (defender.isSome && head.isSome && !head.eq(defender)) || false,
        head: head.unwrapOr(undefined),
        maxMembers,
        pot
      }))
    )
  );
}
