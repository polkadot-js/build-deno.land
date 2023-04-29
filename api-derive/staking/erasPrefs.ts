
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { StorageKey } from 'https://deno.land/x/polkadot@0.2.37/types/mod.ts';
import type { EraIndex } from 'https://deno.land/x/polkadot@0.2.37/types/interfaces/index.ts';
import type { PalletStakingValidatorPrefs } from 'https://deno.land/x/polkadot@0.2.37/types/lookup.ts';
import type { DeriveApi, DeriveEraPrefs, DeriveEraValPrefs } from '../types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';
import { getEraCache, setEraCache } from './cache.ts';
import { combineEras, erasHistoricApply, singleEra } from './util.ts';

const CACHE_KEY = 'eraPrefs';

function mapPrefs (era: EraIndex, all: [StorageKey, PalletStakingValidatorPrefs][]): DeriveEraPrefs {
  const validators: DeriveEraValPrefs = {};

  all.forEach(([key, prefs]): void => {
    validators[key.args[1].toString()] = prefs;
  });

  return { era, validators };
}

export function _eraPrefs (instanceId: string, api: DeriveApi): (era: EraIndex, withActive: boolean) => Observable<DeriveEraPrefs> {
  return memo(instanceId, (era: EraIndex, withActive: boolean): Observable<DeriveEraPrefs> => {
    const [cacheKey, cached] = getEraCache<DeriveEraPrefs>(CACHE_KEY, era, withActive);

    return cached
      ? of(cached)
      : api.query.staking.erasValidatorPrefs.entries(era).pipe(
        map((r) => setEraCache(cacheKey, withActive, mapPrefs(era, r)))
      );
  });
}

export const eraPrefs = /*#__PURE__*/ singleEra('_eraPrefs');
export const _erasPrefs = /*#__PURE__*/ combineEras('_eraPrefs');
export const erasPrefs = /*#__PURE__*/ erasHistoricApply('_erasPrefs');
