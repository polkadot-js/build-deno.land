
/**
 * @name isU8a
 * @summary Tests for a `Uint8Array` object instance.
 * @description
 * Checks to see if the input object is an instance of `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isUint8Array } from 'https://deno.land/x/polkadot@0.2.45/util/mod.ts';
 *
 * console.log('isU8a', isU8a([])); // => false
 * ```
 */
export function isU8a (value?: unknown): value is Uint8Array {
  // here we defer the instanceof check which is actually slightly
  // slower than just checking the constrctor (direct instances)
  return (
    ((value && (value as Uint8Array).constructor) === Uint8Array) ||
    value instanceof Uint8Array
  );
}
