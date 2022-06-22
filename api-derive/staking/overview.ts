// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://cdn.skypack.dev/rxjs@7.5.5';
import type { DeriveApi, DeriveStakingOverview } from '../types.ts';

import { combineLatest, map } from 'https://cdn.skypack.dev/rxjs@7.5.5';

import { memo } from '../util/index.ts';

/**
 * @description Retrieve the staking overview, including elected and points earned
 */
export function overview (instanceId: string, api: DeriveApi): () => Observable<DeriveStakingOverview> {
  return memo(instanceId, (): Observable<DeriveStakingOverview> =>
    combineLatest([
      api.derive.session.indexes(),
      api.derive.staking.validators()
    ]).pipe(
      map(([indexes, { nextElected, validators }]): DeriveStakingOverview => ({
        ...indexes,
        nextElected,
        validators
      }))
    ));
}
