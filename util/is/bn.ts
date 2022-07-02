// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BN } from '../bn/bn.ts';

/**
 * @name isBn
 * @summary Tests for a `BN` object instance.
 * @description
 * Checks to see if the input object is an instance of `BN` (bn.js).
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'https://esm.sh/bn.js@5.2.1';
 * import { isBn } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
 *
 * console.log('isBn', isBn(new BN(1))); // => true
 * ```
 */
export function isBn (value: unknown): value is BN {
  return BN.isBN(value);
}
