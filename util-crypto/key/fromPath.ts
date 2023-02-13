
import type { Keypair, KeypairType } from '../types.ts';

import { DeriveJunction } from './DeriveJunction.ts';
import { keyHdkdEcdsa } from './hdkdEcdsa.ts';
import { keyHdkdEd25519 } from './hdkdEd25519.ts';
import { keyHdkdSr25519 } from './hdkdSr25519.ts';

const generators = {
  ecdsa: keyHdkdEcdsa,
  ed25519: keyHdkdEd25519,
  // FIXME This is Substrate-compatible, not Ethereum-compatible
  ethereum: keyHdkdEcdsa,
  sr25519: keyHdkdSr25519
};

export function keyFromPath (pair: Keypair, path: DeriveJunction[], type: KeypairType): Keypair {
  const keyHdkd = generators[type];
  let result = pair;

  for (const junction of path) {
    result = keyHdkd(result, junction);
  }

  return result;
}
