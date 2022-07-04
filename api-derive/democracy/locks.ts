// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { AccountId, ReferendumInfoTo239, Vote } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { PalletDemocracyReferendumInfo, PalletDemocracyVoteVoting } from 'https://deno.land/x/polkadot@0.0.3/types/lookup.ts';
import type { BN } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import type { DeriveApi, DeriveDemocracyLock } from '../types.ts';

import { map, of, switchMap } from 'https://esm.sh/rxjs@7.5.5';

import { BN_ZERO, isUndefined } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import { memo } from '../util/index.ts';

type ReferendumInfoFinished = PalletDemocracyReferendumInfo['asFinished'];
type VotingDelegating = PalletDemocracyVoteVoting['asDelegating'];
type VotingDirect = PalletDemocracyVoteVoting['asDirect'];
type VotingDirectVote = VotingDirect['votes'][0];

const LOCKUPS = [0, 1, 2, 4, 8, 16, 32];

function parseEnd (api: DeriveApi, vote: Vote, { approved, end }: ReferendumInfoFinished): [BN, BN] {
  return [
    end,
    (approved.isTrue && vote.isAye) || (approved.isFalse && vote.isNay)
      ? end.add(
        (
          api.consts.democracy.voteLockingPeriod ||
          api.consts.democracy.enactmentPeriod
        ).muln(LOCKUPS[vote.conviction.index])
      )
      : BN_ZERO
  ];
}

function parseLock (api: DeriveApi, [referendumId, accountVote]: VotingDirectVote, referendum: PalletDemocracyReferendumInfo): DeriveDemocracyLock {
  const { balance, vote } = accountVote.asStandard;
  const [referendumEnd, unlockAt] = referendum.isFinished
    ? parseEnd(api, vote, referendum.asFinished)
    : [BN_ZERO, BN_ZERO];

  return { balance, isDelegated: false, isFinished: referendum.isFinished, referendumEnd, referendumId, unlockAt, vote };
}

function delegateLocks (api: DeriveApi, { balance, conviction, target }: VotingDelegating): Observable<DeriveDemocracyLock[]> {
  return api.derive.democracy.locks(target).pipe(
    map((available): DeriveDemocracyLock[] =>
      available.map(({ isFinished, referendumEnd, referendumId, unlockAt, vote }): DeriveDemocracyLock => ({
        balance,
        isDelegated: true,
        isFinished,
        referendumEnd,
        referendumId,
        unlockAt: unlockAt.isZero()
          ? unlockAt
          : referendumEnd.add(
            (
              api.consts.democracy.voteLockingPeriod ||
              api.consts.democracy.enactmentPeriod
            ).muln(LOCKUPS[conviction.index])
          ),
        vote: api.registry.createType('Vote', { aye: vote.isAye, conviction })
      }))
    )
  );
}

function directLocks (api: DeriveApi, { votes }: VotingDirect): Observable<DeriveDemocracyLock[]> {
  if (!votes.length) {
    return of([]);
  }

  return api.query.democracy.referendumInfoOf.multi(votes.map(([referendumId]) => referendumId)).pipe(
    map((referendums) =>
      votes
        .map((vote, index): [VotingDirectVote, PalletDemocracyReferendumInfo | ReferendumInfoTo239 | null] =>
          [vote, referendums[index].unwrapOr(null)]
        )
        .filter((item): item is [VotingDirectVote, PalletDemocracyReferendumInfo] =>
          !!item[1] && isUndefined((item[1] as ReferendumInfoTo239).end) && item[0][1].isStandard
        )
        .map(([directVote, referendum]) =>
          parseLock(api, directVote, referendum)
        )
    )
  );
}

export function locks (instanceId: string, api: DeriveApi): (accountId: string | AccountId) => Observable<DeriveDemocracyLock[]> {
  return memo(instanceId, (accountId: string | AccountId): Observable<DeriveDemocracyLock[]> =>
    api.query.democracy.votingOf
      ? api.query.democracy.votingOf(accountId).pipe(
        switchMap((voting): Observable<DeriveDemocracyLock[]> =>
          voting.isDirect
            ? directLocks(api, voting.asDirect)
            : voting.isDelegating
              ? delegateLocks(api, voting.asDelegating)
              : of([])
        )
      )
      : of([])
  );
}
