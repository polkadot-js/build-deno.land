
import type { Memoized } from './types.ts';

import { stringify } from './stringify.ts';

interface Options {
  getInstanceId?: () => string;
}

function defaultGetId (): string {
  return 'none';
}

/**
 * @name memoize
 * @description Memomize the function with a specific instanceId
 */
export function memoize <T, F extends (...args: any[]) => T> (fn: F, { getInstanceId = defaultGetId }: Options = {}): Memoized<F> {
  const cache: Record<string, Record<string, T>> = {};

  const memoized = (...args: unknown[]): T => {
    const stringParams = stringify(args);
    const instanceId = getInstanceId();

    if (!cache[instanceId]) {
      cache[instanceId] = {};
    }

    if (cache[instanceId][stringParams] === undefined) {
      cache[instanceId][stringParams] = fn(...args);
    }

    return cache[instanceId][stringParams];
  };

  memoized.unmemoize = (...args: unknown[]): void => {
    const stringParams = stringify(args);
    const instanceId = getInstanceId();

    if (cache[instanceId]?.[stringParams] !== undefined) {
      delete cache[instanceId][stringParams];
    }
  };

  return memoized as Memoized<F>;
}
