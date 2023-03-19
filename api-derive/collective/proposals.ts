
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { Option } from 'https://deno.land/x/polkadot@0.2.32/types/mod.ts';
import type { Hash, Proposal, Votes } from 'https://deno.land/x/polkadot@0.2.32/types/interfaces/index.ts';
import type { DeriveApi, DeriveCollectiveProposal } from '../types.ts';
import type { Collective, HasProposalsFnRet, ProposalCountFn, ProposalFnRet, ProposalHashesFn, ProposalsFnRet } from './types.ts';

import { catchError, combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.8.0';

import { isFunction } from 'https://deno.land/x/polkadot@0.2.32/util/mod.ts';

import { firstObservable } from '../util/index.ts';
import { callMethod, withSection } from './helpers.ts';

type Result = [(Hash | Uint8Array | string)[], (Option<Proposal> | null)[], Option<Votes>[]];

function parse (api: DeriveApi, [hashes, proposals, votes]: Result): DeriveCollectiveProposal[] {
  return proposals.map((o, index): DeriveCollectiveProposal => ({
    hash: api.registry.createType('Hash', hashes[index]),
    proposal: o && o.isSome
      ? o.unwrap()
      : null,
    votes: votes[index].unwrapOr(null)
  }));
}

function _proposalsFrom (api: DeriveApi, query: DeriveApi['query']['council'], hashes: (Hash | Uint8Array | string)[]): Observable<DeriveCollectiveProposal[]> {
  return (isFunction(query?.proposals) && hashes.length
    ? combineLatest([
      of(hashes),
      // this should simply be api.query[section].proposalOf.multi<Option<Proposal>>(hashes),
      // however we have had cases on Edgeware where the indices have moved around after an
      // upgrade, which results in invalid on-chain data
      query.proposalOf.multi<Option<Proposal>>(hashes).pipe(
        catchError(() => of(hashes.map(() => null)))
      ),
      query.voting.multi<Option<Votes>>(hashes)
    ])
    : of<Result>([[], [], []])
  ).pipe(
    map((r) => parse(api, r))
  );
}

export function hasProposals (section: Collective): HasProposalsFnRet {
  return withSection(section, (query) =>
    (): Observable<boolean> =>
      of(isFunction(query?.proposals))
  );
}

export function proposals (section: Collective): ProposalsFnRet {
  return withSection(section, (query, api) =>
    (): Observable<DeriveCollectiveProposal[]> =>
      api.derive[section as 'council'].proposalHashes().pipe(
        switchMap((all) => _proposalsFrom(api, query, all))
      )
  );
}

export function proposal (section: Collective): ProposalFnRet {
  return withSection(section, (query, api) =>
    (hash: Hash | Uint8Array | string): Observable<DeriveCollectiveProposal | null> =>
      isFunction(query?.proposals)
        ? firstObservable(_proposalsFrom(api, query, [hash]))
        : of(null)
  );
}

export const proposalCount: ProposalCountFn = /*#__PURE__*/ callMethod('proposalCount', null);
export const proposalHashes: ProposalHashesFn = /*#__PURE__*/ callMethod('proposals', []);
