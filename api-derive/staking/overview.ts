
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { DeriveApi, DeriveStakingOverview } from '../types.ts';

import { combineLatest, map } from 'https://esm.sh/rxjs@7.8.1';

import { objectSpread } from 'https://deno.land/x/polkadot@0.2.45/util/mod.ts';

import { memo } from '../util/index.ts';

/**
 * @description Retrieve the staking overview, including elected and points earned
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
