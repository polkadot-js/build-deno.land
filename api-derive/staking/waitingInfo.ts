
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { DeriveApi, DeriveStakingWaiting, StakingQueryFlags } from '../types.ts';

import { combineLatest, map, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

const DEFAULT_FLAGS = { withController: true, withPrefs: true };

/**
 * @name waitingInfo
 * @param {StakingQueryFlags} flags? (Optional) Query flags to filter the staking data.
 * @description Staking candidates who are waiting to become validators.
 * @example
 * ```javascript
 * const { waiting, info } = await api.derive.staking.waitingInfo();
 * console.log(
 *   "Waiting Candidates:",
 *   waiting.map((acc) => acc.toString())
 * );
 * ```
 */
export function waitingInfo (instanceId: string, api: DeriveApi): (flags?: StakingQueryFlags) => Observable<DeriveStakingWaiting> {
  return memo(instanceId, (flags: StakingQueryFlags = DEFAULT_FLAGS): Observable<DeriveStakingWaiting> =>
    combineLatest([
      api.derive.staking.validators(),
      api.derive.staking.stashes()
    ]).pipe(
      switchMap(([{ nextElected }, stashes]): Observable<DeriveStakingWaiting> => {
        const elected = nextElected.map((a) => a.toString());
        const waiting = stashes.filter((v) => !elected.includes(v.toString()));

        return api.derive.staking.queryMulti(waiting, flags).pipe(
          map((info): DeriveStakingWaiting => ({
            info,
            waiting
          }))
        );
      })
    )
  );
}
