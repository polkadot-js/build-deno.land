
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { DeriveApi } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.8.0';

import { memo } from 'https://deno.land/x/polkadot@0.2.34/rpc-core/mod.ts';

export function firstObservable <T> (obs: Observable<T[]>): Observable<T> {
  return obs.pipe(map(([a]) => a));
}

export function firstMemo <T, A extends any[]> (fn: (api: DeriveApi, ...args: A) => Observable<T[]>): (instanceId: string, api: DeriveApi) => (...args: A) => Observable<T> {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, (...args: A) =>
      firstObservable<T>(fn(api, ...args))
    );
}
