// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { AccountId } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { DeriveApi, DeriveStakingValidators } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.5.5';

import { memo } from '../util/index.ts';

export function nextElected (instanceId: string, api: DeriveApi): () => Observable<AccountId[]> {
  return memo(instanceId, (): Observable<AccountId[]> =>
    api.query.staking.erasStakers
      ? api.derive.session.indexes().pipe(
        // only populate for next era in the last session, so track both here - entries are not
        // subscriptions, so we need a trigger - currentIndex acts as that trigger to refresh
        switchMap(({ currentEra }) => api.query.staking.erasStakers.keys(currentEra)),
        map((keys) => keys.map(({ args: [, accountId] }) => accountId))
      )
      : api.query.staking.currentElected<AccountId[]>()
  );
}

/**
 * @description Retrieve latest list of validators
 */
export function validators (instanceId: string, api: DeriveApi): () => Observable<DeriveStakingValidators> {
  return memo(instanceId, (): Observable<DeriveStakingValidators> =>
    // Sadly the node-template is (for some obscure reason) not comprehensive, so while the derive works
    // in all actual real-world deployed chains, it does create some confusion for limited template chains
    combineLatest([
      api.query.session
        ? api.query.session.validators()
        : of([]),
      api.query.staking
        ? api.derive.staking.nextElected()
        : of([])
    ]).pipe(
      map(([validators, nextElected]): DeriveStakingValidators => ({
        nextElected: nextElected.length
          ? nextElected
          : validators,
        validators
      }))
    ));
}
