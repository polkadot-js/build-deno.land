
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Option } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { Balance, EraIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi, DeriveEraRewards } from '../types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';
import { filterCachedEras, getEraMultiCache, setEraMultiCache } from './cache.ts';
import { erasHistoricApply, filterEras } from './util.ts';

const CACHE_KEY = 'eraRewards';

function mapRewards (eras: EraIndex[], optRewards: Option<Balance>[]): DeriveEraRewards[] {
  return eras.map((era, index): DeriveEraRewards => ({
    era,
    eraReward: optRewards[index].unwrapOrDefault()
  }));
}

export function _erasRewards (instanceId: string, api: DeriveApi): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraRewards[]> {
  return memo(instanceId, (eras: EraIndex[], withActive: boolean): Observable<DeriveEraRewards[]> => {
    if (!eras.length) {
      return of([]);
    }

    const cached = getEraMultiCache<DeriveEraRewards>(CACHE_KEY, eras, withActive);
    const remaining = filterEras(eras, cached);

    if (!remaining.length) {
      return of(cached);
    }

    return api.query.staking.erasValidatorReward.multi(remaining).pipe(
      map((r) => filterCachedEras(eras, cached, setEraMultiCache(CACHE_KEY, withActive, mapRewards(remaining, r))))
    );
  });
}

/**
 * @name erasRewards
 * @description Retrieves rewards for historical eras.
 * @param {boolean} withActive? (Optional) Whether to include the active era in the result.
 * @example
 * ```javascript
 * const rewards = await api.derive.staking.erasRewards(true);
 * ```
 */
export const erasRewards = /*#__PURE__*/ erasHistoricApply('_erasRewards');
