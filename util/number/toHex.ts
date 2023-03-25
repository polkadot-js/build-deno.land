
import type { HexString } from '../types.ts';

import { hexFixLength } from '../hex/fixLength.ts';

/**
 * @name numberToHex
 * @summary Creates a hex value from a number.
 * @description
 * `null`/`undefined`/`NaN` inputs returns an empty `0x` result. `number` input values return the actual bytes value converted to a `hex`. With `bitLength` set, it converts the number to the equivalent size.
 * @example
 * <BR>
 *
 * ```javascript
 * import { numberToHex } from 'https://deno.land/x/polkadot@0.2.33/util/mod.ts';
 *
 * numberToHex(0x1234); // => '0x1234'
 * numberToHex(0x1234, 32); // => 0x00001234
 * ```
 */
export function numberToHex (value?: number | null, bitLength = -1): HexString {
  const hex = (!value || Number.isNaN(value) ? 0 : value).toString(16);

  return hexFixLength(hex.length % 2 ? `0${hex}` : hex, bitLength, true);
}
