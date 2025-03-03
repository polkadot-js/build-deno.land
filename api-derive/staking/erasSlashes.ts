
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Option, StorageKey } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { BalanceOf, EraIndex, Perbill } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { DeriveApi, DeriveEraSlashes, DeriveEraValSlash } from '../types.ts';

import { combineLatest, map, of } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';
import { getEraCache, setEraCache } from './cache.ts';
import { combineEras, erasHistoricApply, singleEra } from './util.ts';

const CACHE_KEY = 'eraSlashes';

function mapSlashes (era: EraIndex, noms: [StorageKey, Option<BalanceOf>][], vals: [StorageKey, Option<ITuple<[Perbill, BalanceOf]>>][]): DeriveEraSlashes {
  const nominators: DeriveEraValSlash = {};
  const validators: DeriveEraValSlash = {};

  noms.forEach(([key, optBalance]): void => {
    nominators[key.args[1].toString()] = optBalance.unwrap();
  });

  vals.forEach(([key, optRes]): void => {
    validators[key.args[1].toString()] = optRes.unwrapOrDefault()[1];
  });

  return { era, nominators, validators };
}

export function _eraSlashes (instanceId: string, api: DeriveApi): (era: EraIndex, withActive: boolean) => Observable<DeriveEraSlashes> {
  return memo(instanceId, (era: EraIndex, withActive: boolean): Observable<DeriveEraSlashes> => {
    const [cacheKey, cached] = getEraCache<DeriveEraSlashes>(CACHE_KEY, era, withActive);

    return cached
      ? of(cached)
      : combineLatest([
        api.query.staking.nominatorSlashInEra.entries(era),
        api.query.staking.validatorSlashInEra.entries(era)
      ]).pipe(
        map(([n, v]) => setEraCache(cacheKey, withActive, mapSlashes(era, n, v)))
      );
  });
}

/**
 * @name eraSlashes
 * @description Retrieves the slashes for a specific staking era.
 * @param {EraIndex} eras The staking era to query.
 * @example
 * ```javascript
 * const era = api.createType("EraIndex", 1000);
 * const slashes = await api.derive.staking.eraSlashes(era);
 * ```
 */
export const eraSlashes = /*#__PURE__*/ singleEra('_eraSlashes');
export const _erasSlashes = /*#__PURE__*/ combineEras('_eraSlashes');
/**
 * @name erasSlashes
 * @description Retrieves slashes for historical eras.
 * @param {boolean} withActive? (Optional) Whether to include the active era in the result.
 * @example
 * ```javascript
 * const slashes = await api.derive.staking.erasSlashes(true);
 * ```
 */
export const erasSlashes = /*#__PURE__*/ erasHistoricApply('_erasSlashes');
