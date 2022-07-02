// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { EraIndex } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { DeriveApi, DeriveOwnExposure } from '../types.ts';

import { combineLatest, map, of } from 'https://esm.sh/rxjs@7.5.5';

import { firstMemo, memo } from '../util/index.ts';
import { erasHistoricApplyAccount } from './util.ts';

export function _ownExposures (instanceId: string, api: DeriveApi): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveOwnExposure[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], _withActive: boolean): Observable<DeriveOwnExposure[]> =>
    eras.length
      ? combineLatest([
        combineLatest(eras.map((e) => api.query.staking.erasStakersClipped(e, accountId))),
        combineLatest(eras.map((e) => api.query.staking.erasStakers(e, accountId)))
      ]).pipe(
        map(([clp, exp]): DeriveOwnExposure[] =>
          eras.map((era, index) => ({ clipped: clp[index], era, exposure: exp[index] }))
        )
      )
      : of([])
  );
}

export const ownExposure = firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, era: EraIndex) =>
    api.derive.staking._ownExposures(accountId, [era], true)
);

export const ownExposures = erasHistoricApplyAccount('_ownExposures');
