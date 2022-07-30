// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ToBn } from '../types.ts';

import { BN } from './bn.ts';
import { BN_MAX_INTEGER, BN_ONE } from './consts.ts';
import { bnToBn } from './toBn.ts';

/** @internal */
export const SQRT_MAX_SAFE_INTEGER = new BN(94906265);

/**
 * @name bnSqrt
 * @summary Calculates the integer square root of a BN
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'https://esm.sh/bn.js@5.2.1';
 * import { bnSqrt } from 'https://deno.land/x/polkadot@0.0.9/util/mod.ts';
 *
 * bnSqrt(new BN(16)).toString(); // => '4'
 * ```
 */
export function bnSqrt <ExtToBn extends ToBn> (value: ExtToBn | BN | bigint | string | number | null): BN {
  const n = bnToBn(value);

  if (n.isNeg()) {
    throw new Error('square root of negative numbers is not supported');
  }

  // https://stackoverflow.com/questions/53683995/javascript-big-integer-square-root/
  // shortcut <= 2^53 - 1 to use the JS utils
  if (n.lte(BN_MAX_INTEGER)) {
    // ~~ More performant version of Math.floor
    return new BN(~~Math.sqrt(n.toNumber()));
  }

  // Use sqrt(MAX_SAFE_INTEGER) as starting point. since we already know the
  // output will be larger than this, we expect this to be a safe start
  let x0 = SQRT_MAX_SAFE_INTEGER.clone();

  while (true) {
    const x1 = n.div(x0).iadd(x0).ishrn(1);

    if (x0.eq(x1) || x0.eq(x1.sub(BN_ONE))) {
      return x0;
    }

    x0 = x1;
  }
}
