
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Option, u32 } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { ActiveEraInfo, EraIndex, Moment, SessionIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi, DeriveSessionIndexes } from '../types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

function parse ([currentIndex, activeEra, activeEraStart, currentEra, validatorCount]: [SessionIndex, EraIndex, Option<Moment>, EraIndex, u32]): DeriveSessionIndexes {
  return {
    activeEra,
    activeEraStart,
    currentEra,
    currentIndex,
    validatorCount
  };
}

function queryStaking (api: DeriveApi): Observable<DeriveSessionIndexes> {
  return api.queryMulti<[SessionIndex, Option<ActiveEraInfo>, Option<EraIndex>, u32]>([
    api.query.session.currentIndex,
    api.query.staking.activeEra,
    api.query.staking.currentEra,
    api.query.staking.validatorCount
  ]).pipe(
    map(([currentIndex, activeOpt, currentEra, validatorCount]): DeriveSessionIndexes => {
      const { index, start } = activeOpt.unwrapOrDefault();

      return parse([
        currentIndex,
        index,
        start,
        currentEra.unwrapOrDefault(),
        validatorCount
      ]);
    })
  );
}

function querySession (api: DeriveApi): Observable<DeriveSessionIndexes> {
  return api.query.session.currentIndex().pipe(
    map((currentIndex): DeriveSessionIndexes => parse([
      currentIndex,
      api.registry.createType('EraIndex'),
      api.registry.createType('Option<Moment>'),
      api.registry.createType('EraIndex'),
      api.registry.createType('u32')
    ]))
  );
}

function empty (api: DeriveApi): Observable<DeriveSessionIndexes> {
  return of(parse([
    api.registry.createType('SessionIndex', 1),
    api.registry.createType('EraIndex'),
    api.registry.createType('Option<Moment>'),
    api.registry.createType('EraIndex'),
    api.registry.createType('u32')
  ]));
}

/**
 * @name indexes
 * @description Retrieves session-related index data, adapting to whether
 * the chain has staking enabled.
 * @example
 * ```javascript
 * api.derive.session.indexes((indexes) => {
 *   console.log(`Current session index: ${indexes.currentIndex}`);
 *   console.log(`Validator count: ${indexes.validatorCount}`);
 * });
 * ```
 */
export function indexes (instanceId: string, api: DeriveApi): () => Observable<DeriveSessionIndexes> {
  return memo(instanceId, (): Observable<DeriveSessionIndexes> =>
    api.query.session
      ? api.query.staking
        ? queryStaking(api)
        : querySession(api)
      : empty(api)
  );
}
