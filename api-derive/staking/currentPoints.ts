
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { PalletStakingEraRewardPoints } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { DeriveApi } from '../types.ts';

import { switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

/**
 * @name currentPoints
 * @description Retrieve the staking overview, including elected and points earned.
 * @example
 * ```javascript
 * const currentPoints = await api.derive.staking.currentPoints();
 * console.log(currentPoints.toHuman());
 * ```
 */
export function currentPoints (instanceId: string, api: DeriveApi): () => Observable<PalletStakingEraRewardPoints> {
  return memo(instanceId, (): Observable<PalletStakingEraRewardPoints> =>
    api.derive.session.indexes().pipe(
      switchMap(({ activeEra }) =>
        api.query.staking.erasRewardPoints(activeEra)
      )
    ));
}
