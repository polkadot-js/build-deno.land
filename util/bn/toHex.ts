// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString, NumberOptions, ToBn } from '../types.ts';
import type { BN } from './bn.ts';

import { isNumber } from '../is/number.ts';
import { objectSpread } from '../object/spread.ts';
import { u8aToHex } from '../u8a/index.ts';
import { bnToU8a } from './toU8a.ts';

const ZERO_STR = '0x00';
const DEFAULT_OPTS: NumberOptions = { bitLength: -1, isLe: false, isNegative: false };

/**
 * @name bnToHex
 * @summary Creates a hex value from a BN.js bignumber object.
 * @description
 * `null` inputs returns a `0x` result, BN values return the actual value as a `0x` prefixed hex value. Anything that is not a BN object throws an error. With `bitLength` set, it fixes the number to the specified length.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'https://cdn.skypack.dev/bn.js@5.2.1';
 * import { bnToHex } from 'https://deno.land/x/polkadot/util/mod.ts';
 *
 * bnToHex(new BN(0x123456)); // => '0x123456'
 * ```
 */
function bnToHex <ExtToBn extends ToBn> (value?: ExtToBn | BN | bigint | number | null, options?: NumberOptions): HexString;
/** @deprecated Use bnToHex (value?: ExtToBn | BN | bigint | number | null, options?: NumberOptions) */
function bnToHex <ExtToBn extends ToBn> (value?: ExtToBn | BN | bigint | number | null, bitLength?: number, isLe?: boolean): HexString;
/** @deprecated Use bnToHex (value?: ExtToBn | BN | bigint | number | null, options?: NumberOptions) */
function bnToHex <ExtToBn extends ToBn> (value?: ExtToBn | BN | bigint | number | null, arg1: number | NumberOptions = DEFAULT_OPTS, arg2 = false): HexString {
  return !value
    ? ZERO_STR
    : u8aToHex(
      bnToU8a(value, objectSpread(
        // We spread here, the default for hex values is BE (JSONRPC via substrate)
        { isLe: false, isNegative: false },
        isNumber(arg1)
          ? { bitLength: arg1, isLe: arg2 }
          : arg1
      ))
    );
}

export { bnToHex };