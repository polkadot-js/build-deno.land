
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { AccountId } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi, DeriveStakingElected, StakingQueryFlags } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { arrayFlatten } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';
import { electedKeysAt } from './util.ts';

const DEFAULT_FLAGS = { withController: true, withExposure: true, withPrefs: true };

/**
 * @name electedInfo
 * @param {StakingQueryFlags} flags? (Optional) Query flags to filter the staking data.
 * @param {number} page? (Optional) The page index for paginated results.
 * @description Retrieves detailed staking information about the next elected validators and their associated staking data.
 * @example
 * ```javascript
 * const { nextElected, validators, info } =
 *   await api.derive.staking.electedInfo();
 * console.log(
 *   "Next Elected Validators:",
 *   nextElected.map((acc) => acc.toString())
 * );
 * console.log(
 *   "Current Validators:",
 *   validators.map((acc) => acc.toString())
 * );
 * console.log("Validator Staking Info:", info);
 * ```
 */
export function electedInfo (instanceId: string, api: DeriveApi): (flags?: StakingQueryFlags, page?: number) => Observable<DeriveStakingElected> {
  return memo(instanceId, (flags: StakingQueryFlags = DEFAULT_FLAGS, page = 0): Observable<DeriveStakingElected> =>
    api.derive.session.indexes().pipe(
      switchMap(({ activeEra, currentEra }): Observable<DeriveStakingElected> =>
        combineLatest([
          api.query.session
            ? api.query.session.validators()
            : of([] as AccountId[]),
          electedKeysAt(api, currentEra)
        ]).pipe(
          switchMap(([validators, plannedElected]): Observable<DeriveStakingElected> => {
            // a stash is only exposed at the era it was elected for: the planned set against the
            // planned era, the validators left out of it against the active era. Until the
            // election result is stored the planned era holds nothing, so the current validators
            // stand in as the next set.
            const plannedIds = new Set(plannedElected.map((a) => a.toString()));
            const active = validators.filter((v) => !plannedIds.has(v.toString()));
            const nextElected = plannedElected.length
              ? plannedElected
              : validators;

            return combineLatest([
              api.derive.staking.queryMulti(plannedElected, flags, page, currentEra),
              api.derive.staking.queryMulti(active, flags, page, activeEra)
            ]).pipe(
              map(([plannedInfo, activeInfo]): DeriveStakingElected => ({
                info: arrayFlatten([plannedInfo, activeInfo]),
                nextElected,
                validators
              }))
            );
          })
        )
      )
    )
  );
}
