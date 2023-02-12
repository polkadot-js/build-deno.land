
import type { BN } from '../bn/bn.ts';

import { isOnObject } from './helpers.ts';

interface Compact<T> {
  toBigInt (): bigint;
  toBn (): BN;
  toNumber (): number;
  unwrap (): T;
}

/**
 * @name isCompact
 * @summary Tests for SCALE-Compact-like object instance.
 */
export const isCompact: <T> (value?: unknown) => value is Compact<T> = /*#__PURE__*/ isOnObject('toBigInt', 'toBn', 'toNumber', 'unwrap');
