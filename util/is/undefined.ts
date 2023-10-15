
/**
 * @name isUndefined
 * @summary Tests for a `undefined` values.
 * @description
 * Checks to see if the input value is `undefined`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isUndefined } from 'https://deno.land/x/polkadot@0.2.43/util/mod.ts';
 *
 * console.log('isUndefined', isUndefined(void(0))); // => true
 * ```
 */
export function isUndefined (value?: unknown): value is undefined {
  return value === undefined;
}
