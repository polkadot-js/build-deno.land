
import { hexToBn } from './toBn.ts';

/**
 * @name hexToNumber
 * @summary Creates a Number value from a Buffer object.
 * @description
 * `null` inputs returns an NaN result, `hex` values return the actual value as a `Number`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexToNumber } from 'https://deno.land/x/polkadot@0.2.31/util/mod.ts';
 *
 * hexToNumber('0x1234'); // => 0x1234
 * ```
 */
export function hexToNumber (value?: string | null): number {
  return value
    ? hexToBn(value).toNumber()
    : NaN;
}
