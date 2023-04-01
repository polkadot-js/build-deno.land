
/**
 * @name isInstanceOf
 * @summary Tests for a instance of a class.
 * @description
 * Checks to see if the input value is an instance of the test class.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isInstanceOf } from 'https://deno.land/x/polkadot@0.2.34/util/mod.ts';
 *
 * console.log('isInstanceOf', isInstanceOf(new Array(0), Array)); // => true
 * ```
 */
export function isInstanceOf (value: unknown, Clazz: Function): boolean {
  return (
    ((value && (value as Record<string, unknown>).constructor) === Clazz) ||
    value instanceof Clazz
  );
}
