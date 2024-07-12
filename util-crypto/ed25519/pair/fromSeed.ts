
import type { Keypair } from '../../types.ts';

import { ed25519 } from 'https://esm.sh/@noble/curves@1.3.0/ed25519.js';

import { hasBigInt, u8aConcatStrict } from 'https://deno.land/x/polkadot/util/mod.ts';
import { ed25519KeypairFromSeed, isReady } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

/**
 * @name ed25519PairFromSeed
 * @summary Creates a new public/secret keypair from a seed.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { ed25519PairFromSeed } from 'https://deno.land/x/polkadot/util-crypto/mod.ts';
 *
 * ed25519PairFromSeed(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function ed25519PairFromSeed (seed: Uint8Array, onlyJs?: boolean): Keypair {
  if (!hasBigInt || (!onlyJs && isReady())) {
    const full = ed25519KeypairFromSeed(seed);

    return {
      publicKey: full.slice(32),
      secretKey: full.slice(0, 64)
    };
  }

  const publicKey = ed25519.getPublicKey(seed);

  return {
    publicKey,
    secretKey: u8aConcatStrict([seed, publicKey])
  };
}
