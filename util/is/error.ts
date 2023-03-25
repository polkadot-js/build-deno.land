
/**
 * @name isError
 * @summary Tests for a `Error` object instance.
 * @description
 * Checks to see if the input object is an instance of `Error`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isError } from 'https://deno.land/x/polkadot@0.2.33/util/mod.ts';
 *
 * console.log('isError', isError(new Error('message'))); // => true
 * ```
 */
export function isError (value: unknown): value is Error {
  return (
    ((value && (value as Error).constructor) === Error) ||
    value instanceof Error
  );
}
