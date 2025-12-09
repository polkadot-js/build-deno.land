
import type { Keypair } from '../types.ts';

import * as sr25519 from 'https://esm.sh/@scure/sr25519@0.2.0';

import { isU8a } from 'https://deno.land/x/polkadot/util/mod.ts';

export function createDeriveFn (derive: (pair: Uint8Array, cc: Uint8Array) => Uint8Array): (keypair: Keypair, chainCode: Uint8Array) => Keypair {
  return (keypair: Keypair, chainCode: Uint8Array): Keypair => {
    if (!isU8a(chainCode) || chainCode.length !== 32) {
      throw new Error('Invalid chainCode passed to derive');
    }

    const secretKey = derive(keypair.secretKey, chainCode);
    const publicKey = sr25519.getPublicKey(secretKey);

    return { publicKey, secretKey };
  };
}
