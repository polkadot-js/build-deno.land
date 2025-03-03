
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { EraIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi, DeriveStakerPrefs } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';
import { erasHistoricApplyAccount } from './util.ts';

export function _stakerPrefs (instanceId: string, api: DeriveApi): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerPrefs[]> {
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

/**
 * @name stakerPrefs
 * @param { Uint8Array | string } accountId The stakers AccountId.
 * @param { boolean } withActive Whether to include the active era.
 * @description Retrieves the validator preferences for a given staker across historical eras.
 * @example
 * ```javascript
 * const prefs = await api.derive.staking.stakerPrefs(
 *   ALICE, //Alice accountId
 *   false
 * );
 * console.log(
 *   'Validator Preferences:',
 *   prefs.map(
 *     ({ era, validatorPrefs }) => `Era ${era}: Commission ${validatorPrefs.commission.toString()}`
 *   )
 * );
 * ```
*/
export const stakerPrefs = /*#__PURE__*/ erasHistoricApplyAccount('_stakerPrefs');
