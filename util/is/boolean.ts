
/**
 * @name isBoolean
 * @summary Tests for a boolean value.
 * @description
 * Checks to see if the input value is a JavaScript boolean.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isBoolean } from 'https://deno.land/x/polkadot/util/mod.ts';
 *
 * isBoolean(false); // => true
 * ```
 */
export function isBoolean (value: unknown): value is boolean {
  return typeof value === 'boolean';
}
