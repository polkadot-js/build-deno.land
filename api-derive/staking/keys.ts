// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { Option } from 'https://deno.land/x/polkadot@0.0.3/types/mod.ts';
import type { AccountId } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { NodeRuntimeSessionKeys } from 'https://deno.land/x/polkadot@0.0.3/types/lookup.ts';
import type { DeriveApi } from '../types.ts';
import type { DeriveStakingKeys } from './types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.5.5';

import { firstMemo, memo } from '../util/index.ts';

function extractsIds (stashId: Uint8Array | string, queuedKeys: [AccountId, NodeRuntimeSessionKeys | AccountId[]][], nextKeys: Option<NodeRuntimeSessionKeys>): DeriveStakingKeys {
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

export const keys = firstMemo(
  (api: DeriveApi, stashId: Uint8Array | string) =>
    api.derive.staking.keysMulti([stashId])
);

export function keysMulti (instanceId: string, api: DeriveApi): (stashIds: (Uint8Array | string)[]) => Observable<DeriveStakingKeys[]> {
  return memo(instanceId, (stashIds: (Uint8Array | string)[]): Observable<DeriveStakingKeys[]> =>
    stashIds.length
      ? api.query.session.queuedKeys().pipe(
        switchMap((queuedKeys) =>
          combineLatest([
            of(queuedKeys),
            api.consts.session?.dedupKeyPrefix
              ? api.query.session.nextKeys.multi(stashIds.map((s) => [api.consts.session.dedupKeyPrefix, s]))
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
