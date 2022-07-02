// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observer, TeardownLogic } from 'https://esm.sh/rxjs@7.5.5';
import type { Memoized } from 'https://deno.land/x/polkadot@0.0.2/util/types.ts';

import { Observable } from 'https://esm.sh/rxjs@7.5.5';

import { memoize } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

import { drr } from './drr.ts';

type ObsFn <T> = (...params: unknown[]) => Observable<T>;

// Wraps a derive, doing 2 things to optimize calls -
//   1. creates a memo of the inner fn -> Observable, removing when unsubscribed
//   2. wraps the observable in a drr() (which includes an unsub delay)
/** @internal */
// eslint-disable-next-line @typescript-eslint/ban-types
export function memo <T> (instanceId: string, inner: Function): Memoized<ObsFn<T>> {
  const options = { getInstanceId: () => instanceId };
  const cached = memoize(
    (...params: unknown[]): Observable<T> =>
      new Observable((observer: Observer<T>): TeardownLogic => {
        const subscription = (inner as ObsFn<T>)(...params).subscribe(observer);

        return (): void => {
          cached.unmemoize(...params);
          subscription.unsubscribe();
        };
      }).pipe(drr()),
    options
  );

  return cached;
}
