
import { sr25519DeriveKeypairHard } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

import { createDeriveFn } from './derive.ts';

export const sr25519DeriveHard = createDeriveFn(sr25519DeriveKeypairHard);
