// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { Bytes, Option } from 'https://deno.land/x/polkadot@0.0.3/types/mod.ts';
import type { BountyIndex } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { PalletBountiesBounty } from 'https://deno.land/x/polkadot@0.0.3/types/lookup.ts';
import type { DeriveApi, DeriveBounties, DeriveCollectiveProposal } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.5.5';

import { memo } from '../util/index.ts';
import { filterBountiesProposals } from './helpers/filterBountyProposals.ts';

type Result = [Option<PalletBountiesBounty>[], Option<Bytes>[], BountyIndex[], DeriveCollectiveProposal[]];

function parseResult ([maybeBounties, maybeDescriptions, ids, bountyProposals]: Result): DeriveBounties {
  const bounties: DeriveBounties = [];

  maybeBounties.forEach((bounty, index) => {
    if (bounty.isSome) {
      bounties.push({
        bounty: bounty.unwrap(),
        description: maybeDescriptions[index].unwrapOrDefault().toUtf8(),
        index: ids[index],
        proposals: bountyProposals.filter((bountyProposal) =>
          bountyProposal.proposal && ids[index].eq(bountyProposal.proposal.args[0])
        )
      });
    }
  });

  return bounties;
}

export function bounties (instanceId: string, api: DeriveApi): () => Observable<DeriveBounties> {
  const bountyBase = api.query.bounties || api.query.treasury;

  return memo(instanceId, (): Observable<DeriveBounties> =>
    bountyBase.bounties
      ? combineLatest([
        bountyBase.bountyCount(),
        api.query.council
          ? api.query.council.proposalCount()
          : of(0)
      ]).pipe(
        switchMap(() => combineLatest([
          bountyBase.bounties.keys(),
          api.derive.council
            ? api.derive.council.proposals()
            : of([])
        ])),
        switchMap(([keys, proposals]): Observable<Result> => {
          const ids = keys.map(({ args: [id] }) => id);

          return combineLatest([
            bountyBase.bounties.multi(ids),
            bountyBase.bountyDescriptions.multi(ids),
            of(ids),
            of(filterBountiesProposals(api, proposals))
          ]);
        }),
        map(parseResult)
      )
      : of(parseResult([[], [], [], []]))
  );
}
