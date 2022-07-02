// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { EraIndex } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { DeriveApi, DeriveStakerPrefs } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.5.5';

import { memo } from '../util/index.ts';
import { erasHistoricApplyAccount } from './util.ts';

export function _stakerPrefs (instanceId: string, api: DeriveApi): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerPrefs[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], _withActive: boolean): Observable<DeriveStakerPrefs[]> =>
    api.query.staking.erasValidatorPrefs.multi(eras.map((e) => [e, accountId])).pipe(
      map((all): DeriveStakerPrefs[] =>
        all.map((validatorPrefs, index): DeriveStakerPrefs => ({
          era: eras[index],
          validatorPrefs
        }))
      )
    )
  );
}

export const stakerPrefs = erasHistoricApplyAccount('_stakerPrefs');
