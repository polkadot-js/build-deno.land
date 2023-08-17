
type ObjectIndexed = Record<string, any>;

/**
 * @name isObject
 * @summary Tests for an `object`.
 * @description
 * Checks to see if the input value is a JavaScript object.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isObject } from 'https://deno.land/x/polkadot/util/mod.ts';
 *
 * isObject({}); // => true
 * isObject('something'); // => false
 * ```
 */
export function isObject <T extends ObjectIndexed = ObjectIndexed> (value?: unknown): value is T {
  return !!value && typeof value === 'object';
}
