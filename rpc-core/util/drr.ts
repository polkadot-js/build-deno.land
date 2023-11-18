
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';

import { catchError, distinctUntilChanged, publishReplay, refCount, tap } from 'https://esm.sh/rxjs@7.8.1';

import { stringify } from 'https://deno.land/x/polkadot@0.2.44/util/mod.ts';

import { refCountDelay } from './refCountDelay.ts';

export type DrrResult = <T> (source$: Observable<T>) => Observable<T>;

interface Options {
  delay?: number;
  skipChange?: boolean;
  skipTimeout?: boolean;
}

function CMP (a: unknown, b: unknown): boolean {
  return stringify({ t: a }) === stringify({ t: b });
}

function ERR (error: Error): Observable<never> {
  throw error;
}

function NOOP (): void {
  // empty
}

/**
 * Shorthand for distinctUntilChanged(), publishReplay(1) and refCount().
 *
 * @ignore
 * @internal
 */
export function drr ({ delay, skipChange = false, skipTimeout = false }: Options = {}): DrrResult {
  return <T> (source$: Observable<T>): Observable<T> =>
    source$.pipe(
      catchError(ERR),
      skipChange
        ? tap(NOOP)
        : distinctUntilChanged<T>(CMP),
      // eslint-disable-next-line deprecation/deprecation
      publishReplay(1),
      skipTimeout
        // eslint-disable-next-line deprecation/deprecation
        ? refCount()
        : refCountDelay(delay)
    );
}
