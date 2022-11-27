// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.7';
import type { Balance } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { PalletStakingStakingLedger, PalletStakingUnlockChunk } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { DeriveApi, DeriveSessionInfo, DeriveStakingAccount, DeriveStakingKeys, DeriveStakingQuery, DeriveUnlocking } from '../types.ts';
import type { StakingQueryFlags } from './types.ts';

import { combineLatest, map, switchMap } from 'https://esm.sh/rxjs@7.5.7';

import { BN, BN_ZERO, objectSpread } from 'https://deno.land/x/polkadot/util/mod.ts';

import { firstMemo, memo } from '../util/index.ts';

const QUERY_OPTS = {
  withDestination: true,
  withLedger: true,
  withNominations: true,
  withPrefs: true
};

function groupByEra (list: PalletStakingUnlockChunk[]): Record<string, BN> {
  return list.reduce((map: Record<string, BN>, { era, value }): Record<string, BN> => {
    const key = era.toString();

    map[key] = (map[key] || BN_ZERO).add(value.unwrap());

    return map;
  }, {});
}

function calculateUnlocking (api: DeriveApi, stakingLedger: PalletStakingStakingLedger | undefined, sessionInfo: DeriveSessionInfo): DeriveUnlocking[] | undefined {
  const results = Object
    .entries(groupByEra(
      (stakingLedger?.unlocking || []).filter(({ era }) => era.unwrap().gt(sessionInfo.activeEra))
    ))
    .map(([eraString, value]): DeriveUnlocking => ({
      remainingEras: new BN(eraString).isub(sessionInfo.activeEra),
      value: api.registry.createType('Balance', value)
    }));

  return results.length
    ? results
    : undefined;
}

function redeemableSum (api: DeriveApi, stakingLedger: PalletStakingStakingLedger | undefined, sessionInfo: DeriveSessionInfo): Balance {
  return api.registry.createType('Balance', (stakingLedger?.unlocking || [] as PalletStakingUnlockChunk[]).reduce((total, { era, value }): BN => {
    // aligns with https://github.com/paritytech/substrate/blob/fdfdc73f9e64dc47934b72eb9af3e1989e4ba699/frame/staking/src/pallet/mod.rs#L973-L975
    // (ensure currentEra >= era passed, as per https://github.com/paritytech/substrate/blob/fdfdc73f9e64dc47934b72eb9af3e1989e4ba699/frame/staking/src/lib.rs#L477-L494)
    // NOTE: Previously we used activeEra >= era, which is incorrect for the last session
    return era.unwrap().gt(sessionInfo.currentEra)
      ? total
      : total.iadd(value.unwrap());
  }, new BN(0)));
}

function parseResult (api: DeriveApi, sessionInfo: DeriveSessionInfo, keys: DeriveStakingKeys, query: DeriveStakingQuery): DeriveStakingAccount {
  return objectSpread({}, keys, query, {
    redeemable: redeemableSum(api, query.stakingLedger, sessionInfo),
    unlocking: calculateUnlocking(api, query.stakingLedger, sessionInfo)
  });
}

/**
 * @description From a list of stashes, fill in all the relevant staking details
 */
export function accounts (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], opts?: StakingQueryFlags) => Observable<DeriveStakingAccount[]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], opts: StakingQueryFlags = QUERY_OPTS): Observable<DeriveStakingAccount[]> =>
    api.derive.session.info().pipe(
      switchMap((sessionInfo) =>
        combineLatest([
          api.derive.staking.keysMulti(accountIds),
          api.derive.staking.queryMulti(accountIds, opts)
        ]).pipe(
          map(([keys, queries]) =>
            queries.map((q, index) => parseResult(api, sessionInfo, keys[index], q))
          )
        )
      )
    )
  );
}

/**
 * @description From a stash, retrieve the controllerId and fill in all the relevant staking details
 */
export const account = firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, opts?: StakingQueryFlags) =>
    api.derive.staking.accounts([accountId], opts)
);
