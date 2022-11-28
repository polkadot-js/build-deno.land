// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString, NumberOptions, ToBn } from '../types.ts';
import type { BN } from './bn.ts';

import { u8aToHex } from '../u8a/index.ts';
import { bnToU8a } from './toU8a.ts';

/**
 * @name bnToHex
 * @summary Creates a hex value from a BN.js bignumber object.
 * @description
 * `null` inputs returns a `0x` result, BN values return the actual value as a `0x` prefixed hex value. Anything that is not a BN object throws an error. With `bitLength` set, it fixes the number to the specified length.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'https://esm.sh/bn.js@5.2.1';
 * import { bnToHex } from 'https://deno.land/x/polkadot@0.2.18/util/mod.ts';
 *
 * bnToHex(new BN(0x123456)); // => '0x123456'
 * ```
 */
export function bnToHex <ExtToBn extends ToBn> (value?: ExtToBn | BN | bigint | number | null, { bitLength = -1, isLe = false, isNegative = false }: NumberOptions = {}): HexString {
  return u8aToHex(bnToU8a(value, { bitLength, isLe, isNegative }));
}
