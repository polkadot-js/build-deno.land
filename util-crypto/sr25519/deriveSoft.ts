
import { sr25519DeriveKeypairSoft } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

import { createDeriveFn } from './derive.ts';

export const sr25519DeriveSoft = /*#__PURE__*/ createDeriveFn(sr25519DeriveKeypairSoft);
