
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Option, u64 } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { BlockNumber, SessionIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi, DeriveSessionInfo, DeriveSessionProgress } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { objectSpread } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';

type ResultSlotsNoSession = [u64, u64, u64];
type ResultSlots = [u64, u64, u64, Option<SessionIndex>];
type ResultSlotsFlat = [u64, u64, u64, SessionIndex];

function withProgressField (field: 'eraLength' | 'eraProgress' | 'sessionProgress'): (instanceId: string, api: DeriveApi) => () => Observable<BlockNumber> {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, (): Observable<BlockNumber> =>
      api.derive.session.progress().pipe(
        map((info) => info[field])
      )
    );
}

function createDerive (api: DeriveApi, info: DeriveSessionInfo, [currentSlot, epochIndex, epochOrGenesisStartSlot, activeEraStartSessionIndex]: ResultSlotsFlat): DeriveSessionProgress {
  const epochStartSlot = epochIndex.mul(info.sessionLength).iadd(epochOrGenesisStartSlot);
  const sessionProgress = currentSlot.sub(epochStartSlot);
  const eraProgress = info.currentIndex.sub(activeEraStartSessionIndex).imul(info.sessionLength).iadd(sessionProgress);

  return objectSpread({
    eraProgress: api.registry.createType('BlockNumber', eraProgress),
    sessionProgress: api.registry.createType('BlockNumber', sessionProgress)
  }, info);
}

function queryAura (api: DeriveApi): Observable<DeriveSessionProgress> {
  return api.derive.session.info().pipe(
    map((info): DeriveSessionProgress =>
      objectSpread({
        eraProgress: api.registry.createType('BlockNumber'),
        sessionProgress: api.registry.createType('BlockNumber')
      }, info)
    )
  );
}

function queryBabe (api: DeriveApi): Observable<[DeriveSessionInfo, ResultSlotsFlat]> {
  return api.derive.session.info().pipe(
    switchMap((info): Observable<[DeriveSessionInfo, ResultSlots | ResultSlotsNoSession]> =>
      combineLatest([
        of(info),
        // we may have no staking, but have babe (permissioned)
        api.query.staking?.erasStartSessionIndex
          ? api.queryMulti<ResultSlots>([
            api.query.babe.currentSlot,
            api.query.babe.epochIndex,
            api.query.babe.genesisSlot,
            [api.query.staking.erasStartSessionIndex, info.activeEra]
          ])
          : api.queryMulti<ResultSlotsNoSession>([
            api.query.babe.currentSlot,
            api.query.babe.epochIndex,
            api.query.babe.genesisSlot
          ])
      ])
    ),
    map(([info, [currentSlot, epochIndex, genesisSlot, optStartIndex]]): [DeriveSessionInfo, ResultSlotsFlat] => [
      info, [currentSlot, epochIndex, genesisSlot, optStartIndex && optStartIndex.isSome ? optStartIndex.unwrap() : api.registry.createType('SessionIndex', 1)]
    ])
  );
}

/**
 * @name progress
 * @description Retrieves session information and progress.
 * @example
 * ```javascript
 * api.derive.session.progress((progress) => {
 *   console.log(`Session progress ${JSON.stringify(progress)}`);
 * });
 * ```
 */
export function progress (instanceId: string, api: DeriveApi): () => Observable<DeriveSessionProgress> {
  return memo(instanceId, (): Observable<DeriveSessionProgress> =>
    api.query.babe
      ? queryBabe(api).pipe(
        map(([info, slots]: [DeriveSessionInfo, ResultSlotsFlat]): DeriveSessionProgress =>
          createDerive(api, info, slots)
        )
      )
      : queryAura(api)
  );
}

/**
 * @name eraLenght
 * @description Retrieves the total length of the current era.
 * @example
 * ```javascript
 * api.derive.session.eraLength((length) => {
 *   console.log(`Current era length: ${length} sessions`);
 * });
 * ```
 */
export const eraLength = /*#__PURE__*/ withProgressField('eraLength');
/**
 * @name eraProgress
 * @description Retrieves the progress of the current era.
 * @example
 * ```javascript
 * api.derive.session.eraProgress((progress) => {
 *   console.log(`Current era progress: ${progress} sessions`);
 * });
 * ```
 */
export const eraProgress = /*#__PURE__*/ withProgressField('eraProgress');
/**
 * @name sessionProgress
 * @description Retrieves the progress of the current session.
 * @example
 * ```javascript
 *   api.derive.session.sessionProgress((progress) => {
 *   console.log(`Current session progress: ${progress} slots`);
 * });
 * ```
 */
export const sessionProgress = /*#__PURE__*/ withProgressField('sessionProgress');
