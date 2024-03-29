
import type { Observable, Subscription } from 'https://esm.sh/rxjs@7.8.1';
import type { Callback, Codec } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { DecorateFn, DecorateMethodOptions, ObsInnerType, StorageEntryPromiseOverloads, UnsubscribePromise, VoidFn } from '../types/index.ts';

import { catchError, EMPTY, tap } from 'https://esm.sh/rxjs@7.8.1';

import { isFunction, nextTick } from 'https://deno.land/x/polkadot/util/mod.ts';

interface Tracker<T> {
  reject: (value: Error) => Observable<never>;
  resolve: (value: T) => void;
}

type CodecReturnType<T extends (...args: unknown[]) => Observable<Codec>> =
  T extends (...args: any) => infer R
    ? R extends Observable<Codec>
      ? ObsInnerType<R>
      : never
    : never;

export function promiseTracker<T> (resolve: (value: T) => void, reject: (value: Error) => void): Tracker<T> {
  let isCompleted = false;

  return {
    reject: (error: Error): Observable<never> => {
      if (!isCompleted) {
        isCompleted = true;

        reject(error);
      }

      return EMPTY;
    },
    resolve: (value: T): void => {
      if (!isCompleted) {
        isCompleted = true;

        resolve(value);
      }
    }
  };
}

function extractArgs (args: unknown[], needsCallback: boolean): [unknown[], Callback<Codec> | undefined] {
  const actualArgs = args.slice();

  // If the last arg is a function, we pop it, put it into callback.
  // actualArgs will then hold the actual arguments to be passed to `method`
  const callback = (args.length && isFunction(args[args.length - 1]))
    ? actualArgs.pop() as Callback<Codec>
    : undefined;

  // When we need a subscription, ensure that a valid callback is actually passed
  if (needsCallback && !isFunction(callback)) {
    throw new Error('Expected a callback to be passed with subscriptions');
  }

  return [actualArgs, callback];
}

function decorateCall<M extends DecorateFn<CodecReturnType<M>>> (method: M, args: unknown[]): Promise<CodecReturnType<M>> {
  return new Promise((resolve, reject): void => {
    // single result tracker - either reject with Error or resolve with Codec result
    const tracker = promiseTracker(resolve, reject);

    // encoding errors reject immediately, any result unsubscribes and resolves
    const subscription: Subscription = method(...args)
      .pipe(
        catchError((error: Error) => tracker.reject(error))
      )
      .subscribe((result): void => {
        tracker.resolve(result);

        nextTick(() => subscription.unsubscribe());
      });
  });
}

function decorateSubscribe<M extends DecorateFn<CodecReturnType<M>>> (method: M, args: unknown[], resultCb: Callback<Codec>): UnsubscribePromise {
  return new Promise<VoidFn>((resolve, reject): void => {
    // either reject with error or resolve with unsubscribe callback
    const tracker = promiseTracker(resolve, reject);

    // errors reject immediately, the first result resolves with an unsubscribe promise, all results via callback
    const subscription: Subscription = method(...args)
      .pipe(
        catchError((error: Error) => tracker.reject(error)),
        tap(() => tracker.resolve(() => subscription.unsubscribe()))
      )
      .subscribe((result): void => {
        // queue result (back of queue to clear current)
        nextTick(() => resultCb(result));
      });
  });
}

/**
 * @description Decorate method for ApiPromise, where the results are converted to the Promise equivalent
 */
export function toPromiseMethod<M extends DecorateFn<CodecReturnType<M>>> (method: M, options?: DecorateMethodOptions): StorageEntryPromiseOverloads {
  const needsCallback = !!(options?.methodName && options.methodName.includes('subscribe'));

  return function (...args: unknown[]): Promise<CodecReturnType<M>> | UnsubscribePromise {
    const [actualArgs, resultCb] = extractArgs(args, needsCallback);

    return resultCb
      ? decorateSubscribe(method, actualArgs, resultCb)
      : decorateCall((options?.overrideNoSub as M) || method, actualArgs);
  } as StorageEntryPromiseOverloads;
}
