
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Option } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { ProposalIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { PalletTreasuryProposal } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { DeriveApi, DeriveCollectiveProposal, DeriveTreasuryProposal, DeriveTreasuryProposals } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

interface Result {
  allIds: ProposalIndex[];
  allProposals: Option<PalletTreasuryProposal>[];
  approvalIds: ProposalIndex[];
  councilProposals: DeriveCollectiveProposal[];
  proposalCount: ProposalIndex;
}

function parseResult (api: DeriveApi, { allIds, allProposals, approvalIds, councilProposals, proposalCount }: Result): DeriveTreasuryProposals {
  const approvals: DeriveTreasuryProposal[] = [];
  const proposals: DeriveTreasuryProposal[] = [];
  const councilTreasury = councilProposals.filter(({ proposal }) =>
    // FIXME `approveProposal` and `rejectProposal` have been removed in substrate and released in 1.14
    // in favor of `spend`. See: https://github.com/paritytech/polkadot-sdk/pull/3820
    proposal && (
      (api.tx.treasury['approveProposal'] && api.tx.treasury['approveProposal'].is(proposal)) ||
      (api.tx.treasury['rejectProposal'] && api.tx.treasury['rejectProposal'].is(proposal))
    )
  );

  allIds.forEach((id, index): void => {
    if (allProposals[index].isSome) {
      const council = councilTreasury
        .filter(({ proposal }) => proposal && id.eq(proposal.args[0]))
        .sort((a, b) =>
          a.proposal && b.proposal
            ? a.proposal.method.localeCompare(b.proposal.method)
            : a.proposal
              ? -1
              : 1
        );
      const isApproval = approvalIds.some((approvalId) => approvalId.eq(id));
      const derived = { council, id, proposal: allProposals[index].unwrap() };

      if (isApproval) {
        approvals.push(derived);
      } else {
        proposals.push(derived);
      }
    }
  });

  return { approvals, proposalCount, proposals };
}

function retrieveProposals (api: DeriveApi, proposalCount: ProposalIndex, approvalIds: ProposalIndex[]): Observable<DeriveTreasuryProposals> {
  const proposalIds: ProposalIndex[] = [];
  const count = proposalCount.toNumber();

  for (let index = 0; index < count; index++) {
    if (!approvalIds.some((id) => id.eqn(index))) {
      proposalIds.push(api.registry.createType('ProposalIndex', index));
    }
  }

  const allIds = [...proposalIds, ...approvalIds];

  return combineLatest([
    api.query.treasury.proposals.multi(allIds),
    api.derive.council
      ? api.derive.council.proposals()
      : of([] as DeriveCollectiveProposal[])
  ]).pipe(
    map(([allProposals, councilProposals]): DeriveTreasuryProposals =>
      parseResult(api, { allIds, allProposals, approvalIds, councilProposals, proposalCount })
    )
  );
}

/**
 * @description Retrieve all active and approved treasury proposals, along with their info
 */
export function proposals (instanceId: string, api: DeriveApi): () => Observable<DeriveTreasuryProposals> {
  return memo(instanceId, (): Observable<DeriveTreasuryProposals> =>
    api.query.treasury
      ? combineLatest([
        api.query.treasury.proposalCount(),
        api.query.treasury.approvals()
      ]).pipe(
        switchMap(([proposalCount, approvalIds]) =>
          retrieveProposals(api, proposalCount, approvalIds)
        )
      )
      : of({
        approvals: [],
        proposalCount: api.registry.createType('ProposalIndex'),
        proposals: []
      } as DeriveTreasuryProposals)
  );
}
