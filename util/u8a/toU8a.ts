
import type { U8aLike } from '../types.ts';

import { hexToU8a } from '../hex/toU8a.ts';
import { isBuffer } from '../is/buffer.ts';
import { isHex } from '../is/hex.ts';
import { isU8a } from '../is/u8a.ts';
import { stringToU8a } from '../string/toU8a.ts';

/**
 * @name u8aToU8a
 * @summary Creates a Uint8Array value from a Uint8Array, Buffer, string or hex input.
 * @description
 * `null` or `undefined` inputs returns a `[]` result, Uint8Array values returns the value, hex strings returns a Uint8Array representation.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToU8a } from 'https://deno.land/x/polkadot@0.2.29/util/mod.ts';
 *
 * u8aToU8a(new Uint8Array([0x12, 0x34]); // => Uint8Array([0x12, 0x34])
 * u8aToU8a(0x1234); // => Uint8Array([0x12, 0x34])
 * ```
 */
export function u8aToU8a (value?: U8aLike | null): Uint8Array {
  return isU8a(value)
    // NOTE isBuffer needs to go here since it actually extends
    // Uint8Array on Node.js environments, so all Buffer are Uint8Array,
    // but Uint8Array is not Buffer
    ? isBuffer(value)
      ? new Uint8Array(value)
      : value
    : isHex(value)
      ? hexToU8a(value)
      : Array.isArray(value)
        ? new Uint8Array(value)
        : stringToU8a(value);
}
