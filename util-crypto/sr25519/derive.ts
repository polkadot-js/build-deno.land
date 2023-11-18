
import type { Keypair } from '../types.ts';

import { isU8a } from 'https://deno.land/x/polkadot@0.2.44/util/mod.ts';

import { sr25519PairFromU8a } from './pair/fromU8a.ts';
import { sr25519KeypairToU8a } from './pair/toU8a.ts';

export function createDeriveFn (derive: (pair: Uint8Array, cc: Uint8Array) => Uint8Array): (keypair: Keypair, chainCode: Uint8Array) => Keypair {
  return (keypair: Keypair, chainCode: Uint8Array): Keypair => {
    if (!isU8a(chainCode) || chainCode.length !== 32) {
      throw new Error('Invalid chainCode passed to derive');
    }

    return sr25519PairFromU8a(
      derive(sr25519KeypairToU8a(keypair), chainCode)
    );
  };
}
