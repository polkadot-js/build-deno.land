// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.3/util/types.ts';

import { hasBigInt, u8aToU8a } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import { isReady, twox } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto/mod.ts';

import { createAsHex } from '../helpers.ts';
import { xxhash64 } from './xxhash64.ts';

/**
 * @name xxhashAsU8a
 * @summary Creates a xxhash64 u8a from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash64 and return the result as a `Uint8Array` with the specified `bitLength`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { xxhashAsU8a } from 'https://deno.land/x/polkadot@0.0.3/util-crypto/mod.ts';
 *
 * xxhashAsU8a('abc'); // => 0x44bc2cf5ad770999
 * ```
 */
export function xxhashAsU8a (data: HexString | Buffer | Uint8Array | string, bitLength: 64 | 128 | 192 | 256 | 320 | 384 | 448 | 512 = 64, onlyJs?: boolean): Uint8Array {
  const rounds = Math.ceil(bitLength / 64);
  const u8a = u8aToU8a(data);

  if (!hasBigInt || (!onlyJs && isReady())) {
    return twox(u8a, rounds);
  }

  const result = new Uint8Array(rounds * 8);

  for (let seed = 0; seed < rounds; seed++) {
    result.set(xxhash64(u8a, seed).reverse(), seed * 8);
  }

  return result;
}

/**
 * @name xxhashAsHex
 * @description Creates a xxhash64 hex from the input.
 */
export const xxhashAsHex = createAsHex(xxhashAsU8a);
