
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Option } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { AccountId } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { KitchensinkRuntimeSessionKeys } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { DeriveApi } from '../types.ts';
import type { DeriveStakingKeys } from './types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { firstMemo, memo } from '../util/index.ts';

function extractsIds (stashId: Uint8Array | string, queuedKeys: [AccountId, KitchensinkRuntimeSessionKeys | AccountId[]][], nextKeys: Option<KitchensinkRuntimeSessionKeys>): DeriveStakingKeys {
  const sessionIds = (queuedKeys.find(([currentId]) => currentId.eq(stashId)) || [undefined, [] as AccountId[]])[1];
  const nextSessionIds = nextKeys.unwrapOr([] as AccountId[]);

  return {
    nextSessionIds: Array.isArray(nextSessionIds)
      ? nextSessionIds
      : [...nextSessionIds.values()] as AccountId[],
    sessionIds: Array.isArray(sessionIds)
      ? sessionIds
      : [...sessionIds.values()] as AccountId[]
  };
}

/**
 * @name keys
 * @param { Uint8Array | string } stashId The stash account ID whose session keys are to be retrieved.
 * @description Retrieves the session keys associated with a given stash account.
 * @example
 * ```javascript
 * const keys = await api.derive.staking.keys(
 *   ALICE
 * );
 * console.log(
 *   "Session keys:",
 *   keys.sessionIds.map((key) => `Key: ${key}`)
 * );
 * ```
 */
export const keys = /*#__PURE__*/ firstMemo(
  (api: DeriveApi, stashId: Uint8Array | string) =>
    api.derive.staking.keysMulti([stashId])
);

/**
 * @name keysMulti
 * @description Retrieves session keys for multiple stash accounts.
 * @param { (Uint8Array | string)[] } stashIds Array of stash account IDs.
 * @example
 * ```javascript
 * const keysMulti = await api.derive.staking.keysMulti([ ALICE, BOB ]);
 * keysMulti.forEach((keys) => {
 *   console.log(
 *     "Session keys:",
 *     keys.sessionIds.map((key) => `Key: ${key}`)
 *   );
 * });
 * ```
 */
export function keysMulti (instanceId: string, api: DeriveApi): (stashIds: (Uint8Array | string)[]) => Observable<DeriveStakingKeys[]> {
  return memo(instanceId, (stashIds: (Uint8Array | string)[]): Observable<DeriveStakingKeys[]> =>
    stashIds.length
      ? api.query.session.queuedKeys().pipe(
        switchMap((queuedKeys) =>
          combineLatest([
            of(queuedKeys),
            api.consts['session']?.['dedupKeyPrefix']
              ? api.query.session.nextKeys.multi(stashIds.map((s) => [api.consts['session']['dedupKeyPrefix'], s]))
              : combineLatest(stashIds.map((s) => api.query.session.nextKeys(s)))
          ])
        ),
        map(([queuedKeys, nextKeys]) =>
          stashIds.map((stashId, index) =>
            extractsIds(stashId, queuedKeys, nextKeys[index])
          )
        )
      )
      : of([])
  );
}
