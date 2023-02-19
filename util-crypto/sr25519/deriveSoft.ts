
import { sr25519DeriveKeypairSoft } from 'https://deno.land/x/polkadot@0.2.28/wasm-crypto/mod.ts';

import { createDeriveFn } from './derive.ts';

export const sr25519DeriveSoft = createDeriveFn(sr25519DeriveKeypairSoft);
