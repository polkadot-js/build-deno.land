// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '../bn/bn.ts';
import type { NumberOptions, ToBigInt, ToBn } from '../types.ts';

import { BigInt } from 'https://deno.land/x/polkadot/x-bigint/mod.ts';

import { objectSpread } from '../object/spread.ts';
import { _0n, _1n } from './consts.ts';
import { nToBigInt } from './toBigInt.ts';

const DIV = BigInt(256);
const NEG_MASK = BigInt(0xff);

function toU8a (value: bigint, { isLe, isNegative }: NumberOptions): Uint8Array {
  const arr: number[] = [];

  if (isNegative) {
    value = (value + _1n) * -_1n;
  }

  while (value !== _0n) {
    const mod = value % DIV;
    const val = Number(
      isNegative
        ? mod ^ NEG_MASK
        : mod
    );

    if (isLe) {
      arr.push(val);
    } else {
      arr.unshift(val);
    }

    value = (value - mod) / DIV;
  }

  return Uint8Array.from(arr);
}

/**
 * @name nToU8a
 * @summary Creates a Uint8Array object from a bigint.
 */
export function nToU8a <ExtToBn extends ToBn | ToBigInt> (value?: ExtToBn | BN | bigint | number | null, options?: NumberOptions): Uint8Array {
  const opts: NumberOptions = objectSpread(
    { bitLength: -1, isLe: true, isNegative: false },
    options
  );

  const valueBi = nToBigInt(value);

  if (valueBi === _0n) {
    return opts.bitLength === -1
      ? new Uint8Array()
      : new Uint8Array(Math.ceil((opts.bitLength || 0) / 8));
  }

  const u8a = toU8a(valueBi, opts);

  if (opts.bitLength === -1) {
    return u8a;
  }

  const byteLength = Math.ceil((opts.bitLength || 0) / 8);
  const output = new Uint8Array(byteLength);

  if (opts.isNegative) {
    output.fill(0xff);
  }

  output.set(u8a, opts.isLe ? 0 : byteLength - u8a.length);

  return output;
}
