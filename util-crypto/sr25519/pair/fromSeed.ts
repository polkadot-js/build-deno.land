
import type { Keypair } from '../../types.ts';

import { u8aToU8a } from 'https://deno.land/x/polkadot@0.2.45/util/mod.ts';
import { sr25519KeypairFromSeed } from 'https://deno.land/x/polkadot@0.2.45/wasm-crypto/mod.ts';

import { sr25519PairFromU8a } from './fromU8a.ts';

/**
 * @name sr25519PairFromSeed
 * @description Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 */
export function sr25519PairFromSeed (seed: string | Uint8Array): Keypair {
  const seedU8a = u8aToU8a(seed);

  if (seedU8a.length !== 32) {
    throw new Error(`Expected a seed matching 32 bytes, found ${seedU8a.length}`);
  }

  return sr25519PairFromU8a(
    sr25519KeypairFromSeed(seedU8a)
  );
}
