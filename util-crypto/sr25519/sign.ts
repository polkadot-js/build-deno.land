
import type { Keypair } from '../types.ts';

import * as sr25519 from 'https://esm.sh/@scure/sr25519@0.2.0';

import { u8aToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';

/**
 * @name sr25519Sign
 * @description Returns message signature of `message`, using the supplied pair
 */
export function sr25519Sign (message: string | Uint8Array, { publicKey, secretKey }: Partial<Keypair>): Uint8Array {
  if (publicKey?.length !== 32) {
    throw new Error('Expected a valid publicKey, 32-bytes');
  } else if (secretKey?.length !== 64) {
    throw new Error('Expected a valid secretKey, 64-bytes');
  }

  return sr25519.sign(secretKey, u8aToU8a(message));
}
