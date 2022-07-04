// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { StorageKey } from 'https://deno.land/x/polkadot@0.0.3/types/mod.ts';
import type { AccountId, EraIndex } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { PalletStakingExposure } from 'https://deno.land/x/polkadot@0.0.3/types/lookup.ts';
import type { DeriveApi, DeriveEraExposure, DeriveEraNominatorExposure, DeriveEraValidatorExposure } from '../types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.5.5';

import { memo } from '../util/index.ts';
import { getEraCache, setEraCache } from './cache.ts';
import { combineEras, erasHistoricApply, singleEra } from './util.ts';

type KeysAndExposures = [StorageKey<[EraIndex, AccountId]>, PalletStakingExposure][];

const CACHE_KEY = 'eraExposure';

function mapStakers (era: EraIndex, stakers: KeysAndExposures): DeriveEraExposure {
  const nominators: DeriveEraNominatorExposure = {};
  const validators: DeriveEraValidatorExposure = {};

  stakers.forEach(([key, exposure]): void => {
    const validatorId = key.args[1].toString();

    validators[validatorId] = exposure;

    exposure.others.forEach(({ who }, validatorIndex): void => {
      const nominatorId = who.toString();

      nominators[nominatorId] = nominators[nominatorId] || [];
      nominators[nominatorId].push({ validatorId, validatorIndex });
    });
  });

  return { era, nominators, validators };
}

export function _eraExposure (instanceId: string, api: DeriveApi): (era: EraIndex, withActive?: boolean) => Observable<DeriveEraExposure> {
  return memo(instanceId, (era: EraIndex, withActive = false): Observable<DeriveEraExposure> => {
    const [cacheKey, cached] = getEraCache<DeriveEraExposure>(CACHE_KEY, era, withActive);

    return cached
      ? of(cached)
      : api.query.staking.erasStakersClipped.entries(era).pipe(
        map((r) => setEraCache(cacheKey, withActive, mapStakers(era, r)))
      );
  });
}

export const eraExposure = singleEra('_eraExposure');
export const _erasExposure = combineEras('_eraExposure');
export const erasExposure = erasHistoricApply('_erasExposure');
