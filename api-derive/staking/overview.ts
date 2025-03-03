
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { DeriveApi, DeriveStakingOverview } from '../types.ts';

import { combineLatest, map } from 'https://esm.sh/rxjs@7.8.1';

import { objectSpread } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';

/**
 * @name overview
 * @description Retrieve the staking overview, including elected validators and points earned.
 * @example
 * ```javascript
 * const {
 *   activeEra,
 *   activeEraStart,
 *   currentEra,
 *   currentIndex,
 *   nextElected,
 *   validatorCount,
 *   validators,
 * } = await api.derive.staking.overview();
 * ```
 */
export function overview (instanceId: string, api: DeriveApi): () => Observable<DeriveStakingOverview> {
  return memo(instanceId, (): Observable<DeriveStakingOverview> =>
    combineLatest([
      api.derive.session.indexes(),
      api.derive.staking.validators()
    ]).pipe(
      map(([indexes, { nextElected, validators }]): DeriveStakingOverview =>
        objectSpread({}, indexes, {
          nextElected,
          validators
        })
      )
    ));
}
