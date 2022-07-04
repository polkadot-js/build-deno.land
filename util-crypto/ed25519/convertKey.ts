// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import ed2curve from 'https://esm.sh/ed2curve@0.3.0';

import { assertReturn } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

export function convertSecretKeyToCurve25519 (secretKey: Uint8Array): Uint8Array {
  return ed2curve.convertSecretKey(secretKey);
}

export function convertPublicKeyToCurve25519 (publicKey: Uint8Array): Uint8Array {
  return assertReturn(ed2curve.convertPublicKey(publicKey), 'Unable to convert publicKey to ed25519');
}
