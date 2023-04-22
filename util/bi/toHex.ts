
import type { BN } from '../bn/bn.ts';
import type { HexString, NumberOptions, ToBigInt, ToBn } from '../types.ts';

import { u8aToHex } from '../u8a/index.ts';
import { nToU8a } from './toU8a.ts';

/**
 * @name nToHex
 * @summary Creates a hex value from a bigint object.
 */
export function nToHex <ExtToBn extends ToBn | ToBigInt> (value?: ExtToBn | BN | bigint | number | null, { bitLength = -1, isLe = false, isNegative = false }: NumberOptions = {}): HexString {
  return u8aToHex(nToU8a(value || 0, { bitLength, isLe, isNegative }));
}
