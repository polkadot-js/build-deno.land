// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '../bn/bn.ts';
import type { HexString, ToBigInt, ToBn } from '../types.ts';

import { BigInt } from 'https://deno.land/x/polkadot@0.0.2/x-bigint/mod.ts';

import { hexToBigInt } from '../hex/toBigInt.ts';
import { isBn } from '../is/bn.ts';
import { isHex } from '../is/hex.ts';
import { isToBigInt } from '../is/toBigInt.ts';
import { isToBn } from '../is/toBn.ts';

/**
 * @name nToBigInt
 * @summary Creates a bigInt value from a BN, bigint, string (base 10 or hex) or number input.
 */
export function nToBigInt <ExtToBn extends ToBigInt | ToBn> (value?: HexString | ExtToBn | BN | bigint | string | number | null): bigint {
  return typeof value === 'bigint'
    ? value
    : !value
      ? BigInt(0)
      : isHex(value)
        ? hexToBigInt(value.toString())
        : isBn(value)
          ? BigInt(value.toString())
          : isToBigInt(value)
            ? value.toBigInt()
            : isToBn(value)
              ? BigInt(value.toBn().toString())
              : BigInt(value);
}
