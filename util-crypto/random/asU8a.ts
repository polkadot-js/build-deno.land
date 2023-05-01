
import { getRandomValues } from 'https://deno.land/x/polkadot@0.2.38/x-randomvalues/mod.ts';

import { createAsHex } from '../helpers.ts';

/**
 * @name randomAsU8a
 * @summary Creates a Uint8Array filled with random bytes.
 * @description
 * Returns a `Uint8Array` with the specified (optional) length filled with random bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsU8a } from 'https://deno.land/x/polkadot@0.2.38/util-crypto/mod.ts';
 *
 * randomAsU8a(); // => Uint8Array([...])
 * ```
 */
export function randomAsU8a (length = 32): Uint8Array {
  return getRandomValues(new Uint8Array(length));
}

/**
 * @name randomAsHex
 * @description Creates a hex string filled with random bytes.
 */
export const randomAsHex = /*#__PURE__*/ createAsHex(randomAsU8a);
