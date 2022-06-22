// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://cdn.skypack.dev/rxjs@7.5.5';
import type { BalanceOf } from 'https://deno.land/x/polkadot/types/interfaces.ts';
import type { PalletSocietyBid, PalletSocietyBidKind } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types/types.ts';
import type { Option } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { DeriveApi, DeriveSocietyCandidate } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://cdn.skypack.dev/rxjs@7.5.5';

import { memo } from '../util/index.ts';

type ResultSuspend = Option<ITuple<[BalanceOf, PalletSocietyBidKind]>>;
type Result = [PalletSocietyBid[], ResultSuspend[]]

/**
 * @description Get the candidate info for a society
 */
export function candidates (instanceId: string, api: DeriveApi): () => Observable<DeriveSocietyCandidate[]> {
  return memo(instanceId, (): Observable<DeriveSocietyCandidate[]> =>
    api.query.society.candidates().pipe(
      switchMap((candidates): Observable<Result> =>
        combineLatest([
          of(candidates),
          api.query.society.suspendedCandidates.multi(
            candidates.map(({ who }) => who)
          )
        ])
      ),
      map(([candidates, suspended]: Result): DeriveSocietyCandidate[] =>
        candidates.map(({ kind, value, who }, index) => ({
          accountId: who,
          isSuspended: suspended[index].isSome,
          kind,
          value
        }))
      )
    )
  );
}
