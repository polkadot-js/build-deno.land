
import type { BN } from '../bn/index.ts';
import type { ToBigInt, ToBn } from '../types.ts';

import { BigInt } from 'https://deno.land/x/polkadot/x-bigint/mod.ts';

import { _0n, _1n, _2pow53n, _sqrt2pow53n } from './consts.ts';
import { nToBigInt } from './toBigInt.ts';

/**
 * @name nSqrt
 * @summary Calculates the integer square root of a bigint
 */
export function nSqrt <ExtToBn extends ToBn | ToBigInt> (value: ExtToBn | BN | bigint | string | number | null): bigint {
  const n = nToBigInt(value);

  if (n < _0n) {
    throw new Error('square root of negative numbers is not supported');
  }

  // https://stackoverflow.com/questions/53683995/javascript-big-integer-square-root/
  // shortcut <= 2^53 - 1 to use the JS utils
  if (n <= _2pow53n) {
    // ~~ is more performant that Math.floor
    return BigInt(~~Math.sqrt(Number(n)));
  }

  // Use sqrt(MAX_SAFE_INTEGER) as starting point. since we already know the
  // output will be larger than this, we expect this to be a safe start
  let x0 = _sqrt2pow53n;

  while (true) {
    const x1 = ((n / x0) + x0) >> _1n;

    if (x0 === x1 || (x0 === (x1 - _1n))) {
      return x0;
    }

    x0 = x1;
  }
}
