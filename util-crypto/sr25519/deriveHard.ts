
import { sr25519DeriveKeypairHard } from 'https://deno.land/x/polkadot@0.2.41/wasm-crypto/mod.ts';

import { createDeriveFn } from './derive.ts';

export const sr25519DeriveHard = /*#__PURE__*/ createDeriveFn(sr25519DeriveKeypairHard);
