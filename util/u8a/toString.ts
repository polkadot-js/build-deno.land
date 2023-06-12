
import { TextDecoder } from 'https://deno.land/x/polkadot@0.2.41/x-textdecoder/mod.ts';

const decoder = new TextDecoder('utf-8');

/**
 * @name u8aToString
 * @summary Creates a utf-8 string from a Uint8Array object.
 * @description
 * `UInt8Array` input values return the actual decoded utf-8 string. `null` or `undefined` values returns an empty string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToString } from 'https://deno.land/x/polkadot@0.2.41/util/mod.ts';
 *
 * u8aToString(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0x6f])); // hello
 * ```
 */
export function u8aToString (value?: Uint8Array | null): string {
  return value
    ? decoder.decode(value)
    : '';
}
