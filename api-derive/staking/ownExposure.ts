
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { EraIndex } from 'https://deno.land/x/polkadot@0.2.41/types/interfaces/index.ts';
import type { DeriveApi, DeriveOwnExposure } from '../types.ts';

import { combineLatest, map, of } from 'https://esm.sh/rxjs@7.8.1';

import { firstMemo, memo } from '../util/index.ts';
import { erasHistoricApplyAccount } from './util.ts';

export function _ownExposures (instanceId: string, api: DeriveApi): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveOwnExposure[]> {
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

export const ownExposure = /*#__PURE__*/ firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, era: EraIndex) =>
    api.derive.staking._ownExposures(accountId, [era], true)
);

export const ownExposures = /*#__PURE__*/ erasHistoricApplyAccount('_ownExposures');
