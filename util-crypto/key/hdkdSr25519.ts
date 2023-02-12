
import type { Keypair } from '../types.ts';

import { sr25519DeriveHard } from '../sr25519/deriveHard.ts';
import { sr25519DeriveSoft } from '../sr25519/deriveSoft.ts';
import { DeriveJunction } from './DeriveJunction.ts';

export function keyHdkdSr25519 (keypair: Keypair, { chainCode, isSoft }: DeriveJunction): Keypair {
  return isSoft
    ? sr25519DeriveSoft(keypair, chainCode)
    : sr25519DeriveHard(keypair, chainCode);
}
