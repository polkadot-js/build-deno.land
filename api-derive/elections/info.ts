
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { u32, Vec } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { AccountId32, Balance, BlockNumber } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { PalletElectionsPhragmenSeatHolder } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { DeriveApi } from '../types.ts';
import type { DeriveElectionsInfo } from './types.ts';

import { combineLatest, map, of } from 'https://esm.sh/rxjs@7.8.1';

import { objectSpread } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';

type Member = PalletElectionsPhragmenSeatHolder | ITuple<[AccountId32, Balance]>;

type Candidate = AccountId32 | ITuple<[AccountId32, Balance]>;

function isSeatHolder (value: Member): value is PalletElectionsPhragmenSeatHolder {
  return !Array.isArray(value);
}

function isCandidateTuple (value: Candidate): value is ITuple<[AccountId32, Balance]> {
  return Array.isArray(value);
}

function getAccountTuple (value: Member): [AccountId32, Balance] {
  return isSeatHolder(value)
    ? [value.who, value.stake]
    : value;
}

function getCandidate (value: Candidate): AccountId32 {
  return isCandidateTuple(value)
    ? value[0]
    : value;
}

function sortAccounts ([, balanceA]: [AccountId32, Balance], [, balanceB]: [AccountId32, Balance]): number {
  return balanceB.cmp(balanceA);
}

function getConstants (api: DeriveApi, elections: string | null): Partial<DeriveElectionsInfo> {
  return elections
    ? {
      candidacyBond: api.consts[elections as 'elections'].candidacyBond as Balance,
      desiredRunnersUp: api.consts[elections as 'elections'].desiredRunnersUp as u32,
      desiredSeats: api.consts[elections as 'elections'].desiredMembers as u32,
      termDuration: api.consts[elections as 'elections'].termDuration as BlockNumber,
      votingBond: api.consts[elections as 'elections']['votingBond'] as Balance,
      votingBondBase: api.consts[elections as 'elections'].votingBondBase as Balance,
      votingBondFactor: api.consts[elections as 'elections'].votingBondFactor as Balance
    }
    : {};
}

function getModules (api: DeriveApi): [string, string | null] {
  const [council] = api.registry.getModuleInstances(api.runtimeVersion.specName, 'council') || ['council'];
  const elections = api.query['phragmenElection']
    ? 'phragmenElection'
    : api.query['electionsPhragmen']
      ? 'electionsPhragmen'
      : api.query.elections
        ? 'elections'
        : null;
  // In some cases council here can refer to `generalCouncil` depending on what the chain specific override is.
  // Therefore, we check to see if it exists in the query field. If it does not we default to `council`.
  const resolvedCouncil = api.query[council] ? council : 'council';

  return [resolvedCouncil, elections];
}

function queryAll (api: DeriveApi, council: string, elections: string): Observable<[AccountId32[], Candidate[], Member[], Member[]]> {
  return api.queryMulti<[Vec<AccountId32>, Vec<Candidate>, Vec<Member>, Vec<Member>]>([
    api.query[council as 'council'].members,
    api.query[elections as 'elections'].candidates,
    api.query[elections as 'elections'].members,
    api.query[elections as 'elections'].runnersUp
  ]);
}

function queryCouncil (api: DeriveApi, council: string): Observable<[AccountId32[], Candidate[], Member[], Member[]]> {
  return combineLatest([
    api.query[council as 'council'].members(),
    of<Candidate[]>([]),
    of<Member[]>([]),
    of<Member[]>([])
  ]);
}

/**
 * @name info
 * @description An object containing the combined results of the storage queries for all relevant election module properties.
 * @example
 * ```javascript
 * api.derive.elections.info(({ members, candidates }) => {
 *   console.log(`There are currently ${members.length} council members and ${candidates.length} prospective council candidates.`);
 * });
 * ```
 */
export function info (instanceId: string, api: DeriveApi): () => Observable<DeriveElectionsInfo> {
  return memo(instanceId, (): Observable<DeriveElectionsInfo> => {
    const [council, elections] = getModules(api);

    return (
      elections
        ? queryAll(api, council, elections)
        : queryCouncil(api, council)
    ).pipe(
      map(([councilMembers, candidates, members, runnersUp]): DeriveElectionsInfo =>
        objectSpread({}, getConstants(api, elections), {
          candidateCount: api.registry.createType('u32', candidates.length),
          candidates: candidates.map(getCandidate),
          members: members.length
            ? members.map(getAccountTuple).sort(sortAccounts)
            : councilMembers.map((a): [AccountId32, Balance] => [a, api.registry.createType('Balance')]),
          runnersUp: runnersUp.map(getAccountTuple).sort(sortAccounts)
        })
      )
    );
  });
}
