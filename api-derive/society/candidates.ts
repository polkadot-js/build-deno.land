
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { AccountId32, BalanceOf } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { PalletSocietyBid, PalletSocietyBidKind, PalletSocietyCandidacy } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { Option, Vec } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { DeriveApi, DeriveSocietyCandidate } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

type ResultSuspend = Option<ITuple<[BalanceOf, PalletSocietyBidKind]>>;
type Result = [PalletSocietyBid[], ResultSuspend[]]

function getPrev (api: DeriveApi): Observable<DeriveSocietyCandidate[]> {
  return api.query.society.candidates<Vec<PalletSocietyBid>>().pipe(
    switchMap((candidates): Observable<Result> =>
      combineLatest([
        of(candidates),
        api.query.society['suspendedCandidates'].multi<Option<ITuple<[BalanceOf, PalletSocietyBidKind]>>>(
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
  );
}

function getCurr (api: DeriveApi) {
  return api.query.society.candidates.entries().pipe(
    map((entries) =>
      entries
        .filter(([, opt]) => opt.isSome)
        .map(([{ args: [accountId] }, opt]): [AccountId32, PalletSocietyCandidacy] => [accountId, opt.unwrap()])
        // FIXME We are missing the new fields from the candidate record
        .map(([accountId, { bid, kind }]) => ({
          accountId,
          isSuspended: false,
          kind,
          value: bid
        }))
    )
  );
}

/**
 * @description Get the candidate info for a society
 */
export function candidates (instanceId: string, api: DeriveApi): () => Observable<DeriveSocietyCandidate[]> {
  return memo(instanceId, (): Observable<DeriveSocietyCandidate[]> =>
    api.query.society['suspendedCandidates'] && api.query.society.candidates.creator.meta.type.isPlain
      ? getPrev(api)
      : getCurr(api)
  );
}
