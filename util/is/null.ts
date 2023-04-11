
/**
 * @name isNull
 * @summary Tests for a `null` values.
 * @description
 * Checks to see if the input value is `null`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isNull } from 'https://deno.land/x/polkadot@0.2.35/util/mod.ts';
 *
 * console.log('isNull', isNull(null)); // => true
 * ```
 */
export function isNull (value?: unknown): value is null {
  return value === null;
}
