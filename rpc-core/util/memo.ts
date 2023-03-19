
import type { Observer, TeardownLogic } from 'https://esm.sh/rxjs@7.8.0';
import type { Memoized } from 'https://deno.land/x/polkadot@0.2.32/util/types.ts';

import { Observable } from 'https://esm.sh/rxjs@7.8.0';

import { memoize } from 'https://deno.land/x/polkadot@0.2.32/util/mod.ts';

import { drr } from './drr.ts';

type ObsFn <T> = (...params: unknown[]) => Observable<T>;

/** @internal */
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
