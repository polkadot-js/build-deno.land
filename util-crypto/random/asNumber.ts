// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BN, hexToBn } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import { randomAsHex } from './asU8a.ts';

const BN_53 = new BN(0b11111111111111111111111111111111111111111111111111111);

/**
 * @name randomAsNumber
 * @summary Creates a random number from random bytes.
 * @description
 * Returns a random number generated from the secure bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsNumber } from 'https://deno.land/x/polkadot@0.0.3/util-crypto/mod.ts';
 *
 * randomAsNumber(); // => <random number>
 * ```
 */
export function randomAsNumber (): number {
  return hexToBn(
    randomAsHex(8)
  ).and(BN_53).toNumber();
}
