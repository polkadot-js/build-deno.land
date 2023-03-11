
import type { ToBnOptions } from '../types.ts';

import { BigInt } from 'https://deno.land/x/polkadot@0.2.30/x-bigint/mod.ts';

import { u8aToBigInt } from '../u8a/toBigInt.ts';
import { hexToU8a } from './toU8a.ts';

/**
 * @name hexToBigInt
 * @summary Creates a BigInt instance object from a hex string.
 */
export function hexToBigInt (value?: string | null, { isLe = false, isNegative = false }: ToBnOptions = {}): bigint {
  return !value || value === '0x'
    ? BigInt(0)
    : u8aToBigInt(hexToU8a(value), { isLe, isNegative });
}
