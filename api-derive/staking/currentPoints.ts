// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.7';
import type { PalletStakingEraRewardPoints } from 'https://deno.land/x/polkadot@0.2.19/types/lookup.ts';
import type { DeriveApi } from '../types.ts';

import { switchMap } from 'https://esm.sh/rxjs@7.5.7';

import { memo } from '../util/index.ts';

/**
 * @description Retrieve the staking overview, including elected and points earned
 */
export function currentPoints (instanceId: string, api: DeriveApi): () => Observable<PalletStakingEraRewardPoints> {
  return memo(instanceId, (): Observable<PalletStakingEraRewardPoints> =>
    api.derive.session.indexes().pipe(
      switchMap(({ activeEra }) =>
        api.query.staking.erasRewardPoints(activeEra)
      )
    ));
}
