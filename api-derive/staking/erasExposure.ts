
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Option, StorageKey, u32 } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { AccountId, AccountId32, EraIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { SpStakingExposure, SpStakingExposurePage } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { DeriveApi, DeriveEraExposurePaged, DeriveEraNominatorExposure, DeriveEraValidatorExposure, DeriveEraValidatorExposurePaged } from '../types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';
import { getEraCache, setEraCache } from './cache.ts';
import { combineEras, erasHistoricApply, singleEra } from './util.ts';

type KeysAndExposures = [StorageKey<[EraIndex, AccountId]>, SpStakingExposure][];
type KeysAndExposuresPaged = [StorageKey<[u32, AccountId32, u32]>, Option<SpStakingExposurePage>][];

const CACHE_KEY = 'eraExposure';

function mapStakersClipped (era: EraIndex, stakers: KeysAndExposures): DeriveEraExposurePaged {
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

function mapStakersPaged (era: EraIndex, stakers: KeysAndExposuresPaged): DeriveEraExposurePaged {
  const nominators: DeriveEraNominatorExposure = {};
  const validators: DeriveEraValidatorExposurePaged = {};

  stakers.forEach(([key, exposureOpt]): void => {
    if (exposureOpt.isSome) {
      const validatorId = key.args[1].toString();
      const exposure = exposureOpt.unwrap();

      validators[validatorId] = exposure;

      exposure.others.forEach(({ who }, validatorIndex): void => {
        const nominatorId = who.toString();

        nominators[nominatorId] = nominators[nominatorId] || [];
        nominators[nominatorId].push({ validatorId, validatorIndex });
      });
    }
  });

  return { era, nominators, validators };
}

/**
 * erasStakersClipped will be deprecated and replaced with erasStakersPaged. Therefore support is given for both
 * storage queries until erasStakersClipped has been completely out of use.
 */
export function _eraExposure (instanceId: string, api: DeriveApi): (era: EraIndex, withActive?: boolean) => Observable<DeriveEraExposurePaged> {
  return memo(instanceId, (era: EraIndex, withActive = false): Observable<DeriveEraExposurePaged> => {
    const [cacheKey, cached] = getEraCache<DeriveEraExposurePaged>(CACHE_KEY, era, withActive);

    return cached
      ? of(cached)
      : api.query.staking.erasStakersPaged
        ? api.query.staking.erasStakersPaged.entries<Option<SpStakingExposurePage>>(era).pipe(
          map((r) => setEraCache(cacheKey, withActive, mapStakersPaged(era, r)))
        )
        : api.query.staking.erasStakersClipped.entries(era).pipe(
          map((r) => setEraCache(cacheKey, withActive, mapStakersClipped(era, r)))
        );
  });
}

/**
 * @name eraExposure
 * @description Retrieves the staking exposure (nominators and total stake) for a specific era.
 * @param {EraIndex} eras The staking era to query.
 * @example
 * ```javascript
 * const era = api.createType("EraIndex", 1000);
 * const exposure = await api.derive.staking.eraExposure(era);
 * ```
 */
export const eraExposure = /*#__PURE__*/ singleEra('_eraExposure');
export const _erasExposure = /*#__PURE__*/ combineEras('_eraExposure');
/**
 * @name erasExposure
 * @description Retrieves staking exposure details for multiple past eras.
 * @param {boolean} withActive? (Optional) Whether to include the active era in the result.
 * @example
 * ```javascript
 * const exposure = await api.derive.staking.erasExposure(true);
 * ```
 */
export const erasExposure = /*#__PURE__*/ erasHistoricApply('_erasExposure');
