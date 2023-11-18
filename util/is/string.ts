
import type { AnyString } from '../types.ts';

/**
 * @name isString
 * @summary Tests for a string.
 * @description
 * Checks to see if the input value is a JavaScript string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isString } from 'https://deno.land/x/polkadot/util/mod.ts';
 *
 * console.log('isString', isString('test')); // => true
 * ```
 */
export function isString (value: unknown): value is AnyString {
  return typeof value === 'string' || value instanceof String;
}
