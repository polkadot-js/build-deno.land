
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { EraIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi, DeriveStakerSlashes } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';
import { erasHistoricApplyAccount } from './util.ts';

export function _stakerSlashes (instanceId: string, api: DeriveApi): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerSlashes[]> {
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean): Observable<DeriveStakerSlashes[]> => {
    const stakerId = api.registry.createType('AccountId', accountId).toString();

    return api.derive.staking._erasSlashes(eras, withActive).pipe(
      map((slashes): DeriveStakerSlashes[] =>
        slashes.map(({ era, nominators, validators }): DeriveStakerSlashes => ({
          era,
          total: nominators[stakerId] || validators[stakerId] || api.registry.createType('Balance')
        }))
      )
    );
  });
}

/**
 * @name stakerSlashes
 * @param { Uint8Array | string } accountId The stakers AccountId.
 * @param { boolean } withActive Whether to include the active era.
 * @description Retrieve the historical slashes (penalties) for a given staker.
 * @example
 * ```javascript
 *  const stakerSlashes = await api.derive.staking.stakerSlashes(
 *   ALICE, //Alice accountId
 *   true
 * );
 * console.log(
 *   'Staker Slashes:',
 *   stakerSlashes.map(({ era, total }) => `Era ${era}: Slashed ${total.toString()}`)
 * );
 * ```
 */
export const stakerSlashes = /*#__PURE__*/ erasHistoricApplyAccount('_stakerSlashes');
