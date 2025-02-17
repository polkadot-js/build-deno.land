import { Buffer } from 'node:buffer';


export { packageInfo } from './packageInfo.ts';

declare const global: unknown;
declare const self: unknown;
declare const window: unknown;

type GlobalThis = typeof globalThis & {
  process?: {
    env?: Record<string, string>;
  };

  [key: string]: unknown;
};

type GlobalNames = keyof typeof globalThis;

type GlobalType<N extends GlobalNames> = typeof globalThis[N];

/** @internal Last-resort "this", if it gets here it probably would fail anyway */
function evaluateThis (fn: (code: string) => unknown): unknown {
  return fn('return this');
}

/**
 * A cross-environment implementation for globalThis
 */
export const xglobal = /*#__PURE__*/ (
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
          ? window
          : evaluateThis(Function)
) as GlobalThis;

/**
 * Extracts a known global from the environment, applying a fallback if not found
 */
export function extractGlobal <N extends GlobalNames, T extends GlobalType<N>> (name: N, fallback: unknown): T {
  // Not quite sure why this is here - snuck in with TS 4.7.2 with no real idea
  // (as of now) as to why this looks like an "any" when we do cast it to a T
  //
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return typeof xglobal[name] === 'undefined'
    ? fallback as T
    : xglobal[name] as T;
}

/**
 * Expose a value as a known global, if not already defined
 */
export function exposeGlobal <N extends GlobalNames, T extends GlobalType<N>> (name: N, fallback: unknown): void {
  if (typeof xglobal[name] === 'undefined') {
    (xglobal as Record<string, unknown>)[name] = fallback as T;
  }
}
