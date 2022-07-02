// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types.ts';

import nacl from 'https://esm.sh/tweetnacl@1.0.3';

import { ed25519KeypairFromSeed, isReady } from 'https://deno.land/x/polkadot@0.0.2/wasm-crypto/mod.ts';

/**
 * @name ed25519PairFromSeed
 * @summary Creates a new public/secret keypair from a seed.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { ed25519PairFromSeed } from 'https://deno.land/x/polkadot@0.0.2/util-crypto/mod.ts';
 *
 * ed25519PairFromSeed(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function ed25519PairFromSeed (seed: Uint8Array, onlyJs?: boolean): Keypair {
  if (!onlyJs && isReady()) {
    const full = ed25519KeypairFromSeed(seed);

    return {
      publicKey: full.slice(32),
      secretKey: full.slice(0, 64)
    };
  }

  return nacl.sign.keyPair.fromSeed(seed);
}
