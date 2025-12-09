
import type { Keypair } from '../../types.ts';

import * as sr25519 from 'https://esm.sh/@scure/sr25519@0.2.0';

import { u8aToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';

/**
 * @name sr25519PairFromSeed
 * @description Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 */
export function sr25519PairFromSeed (seed: string | Uint8Array): Keypair {
  const seedU8a = u8aToU8a(seed);

  if (seedU8a.length !== 32) {
    throw new Error(`Expected a seed matching 32 bytes, found ${seedU8a.length}`);
  }

  const sec = sr25519.secretFromSeed(seedU8a);
  const pub = sr25519.getPublicKey(sec);

  return {
    publicKey: pub,
    secretKey: sec
  };
}
