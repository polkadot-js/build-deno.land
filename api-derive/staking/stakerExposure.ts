// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { EraIndex } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { DeriveApi } from '../types.ts';
import type { DeriveEraValidatorExposure, DeriveStakerExposure } from './types.ts';

import { map, switchMap } from 'https://esm.sh/rxjs@7.5.5';

import { firstMemo, memo } from '../util/index.ts';

export function _stakerExposures (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive?: boolean) => Observable<DeriveStakerExposure[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive = false): Observable<DeriveStakerExposure[][]> => {
    const stakerIds = accountIds.map((a) => api.registry.createType('AccountId', a).toString());

    return api.derive.staking._erasExposure(eras, withActive).pipe(
      map((exposures): DeriveStakerExposure[][] =>
        stakerIds.map((stakerId) =>
          exposures.map(({ era, nominators: allNominators, validators: allValidators }): DeriveStakerExposure => {
            const isValidator = !!allValidators[stakerId];
            const validators: DeriveEraValidatorExposure = {};
            const nominating = allNominators[stakerId] || [];

            if (isValidator) {
              validators[stakerId] = allValidators[stakerId];
            } else if (nominating) {
              nominating.forEach(({ validatorId }): void => {
                validators[validatorId] = allValidators[validatorId];
              });
            }

            return { era, isEmpty: !Object.keys(validators).length, isValidator, nominating, validators };
          })
        )
      )
    );
  });
}

export function stakerExposures (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], withActive?: boolean) => Observable<DeriveStakerExposure[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], withActive = false): Observable<DeriveStakerExposure[][]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerExposures(accountIds, eras, withActive))
    )
  );
}

export const stakerExposure = firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, withActive?: boolean) =>
    api.derive.staking.stakerExposures([accountId], withActive)
);
