
import { sr25519DeriveKeypairHard } from 'https://deno.land/x/polkadot@0.2.33/wasm-crypto/mod.ts';

import { createDeriveFn } from './derive.ts';

export const sr25519DeriveHard = createDeriveFn(sr25519DeriveKeypairHard);
