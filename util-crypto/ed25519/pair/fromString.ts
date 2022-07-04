// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types.ts';

import { stringToU8a } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import { blake2AsU8a } from '../../blake2/asU8a.ts';
import { ed25519PairFromSeed } from './fromSeed.ts';

/**
 * @name ed25519PairFromString
 * @summary Creates a new public/secret keypair from a string.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied string. The string is hashed and the value used as the input seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { ed25519PairFromString } from 'https://deno.land/x/polkadot@0.0.3/util-crypto/mod.ts';
 *
 * ed25519PairFromString('test'); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function ed25519PairFromString (value: string): Keypair {
  return ed25519PairFromSeed(
    blake2AsU8a(
      stringToU8a(value)
    )
  );
}
