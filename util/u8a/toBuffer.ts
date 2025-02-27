import { Buffer } from 'node:buffer';


import type { BufferClass, BufferObject } from '../types.ts';

import { xglobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';

import { hasBuffer } from '../has.ts';

/**
 * @name u8aToBuffer
 * @summary Creates a Buffer object from a hex string.
 * @description
 * `null` inputs returns an empty `Buffer` result. `UInt8Array` input values return the actual bytes value converted to a `Buffer`. Anything that is not a `UInt8Array` throws an error.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToBuffer } from 'https://deno.land/x/polkadot/util/mod.ts';
 *
 * console.log('Buffer', u8aToBuffer(new Uint8Array([1, 2, 3])));
 * ```
 */
export function u8aToBuffer <T = BufferObject> (value?: Uint8Array | null): T {
  return hasBuffer
    ? (xglobal.Buffer as unknown as BufferClass).from(value || [])
    : new Uint8Array(value || []) as T;
}
