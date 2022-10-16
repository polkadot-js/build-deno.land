// Copyright 2017-2022 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.7';

import { catchError, distinctUntilChanged, publishReplay, refCount, tap } from 'https://esm.sh/rxjs@7.5.7';

import { stringify } from 'https://deno.land/x/polkadot/util/mod.ts';

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
      publishReplay(1),
      skipTimeout
        ? refCount()
        : refCountDelay(delay)
    );
}
