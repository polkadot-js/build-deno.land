// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { DeriveApi } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.5.5';

import { memo } from 'https://deno.land/x/polkadot@0.0.2/rpc-core/mod.ts';

export function firstObservable <T> (obs: Observable<T[]>): Observable<T> {
  return obs.pipe(map(([a]) => a));
}

export function firstMemo <T, A extends any[]> (fn: (api: DeriveApi, ...args: A) => Observable<T[]>): (instanceId: string, api: DeriveApi) => (...args: A) => Observable<T> {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, (...args: A) =>
      firstObservable<T>(fn(api, ...args))
    );
}
