// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.2/util/types.ts';

import { u8aToU8a } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import { sr25519Agree } from 'https://deno.land/x/polkadot@0.0.2/wasm-crypto/mod.ts';

/**
 * @name sr25519Agreement
 * @description Key agreement between other's public key and self secret key
 */
export function sr25519Agreement (secretKey: HexString | Uint8Array | string, publicKey: HexString | Uint8Array | string): Uint8Array {
  const secretKeyU8a = u8aToU8a(secretKey);
  const publicKeyU8a = u8aToU8a(publicKey);

  if (publicKeyU8a.length !== 32) {
    throw new Error(`Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
  } else if (secretKeyU8a.length !== 64) {
    throw new Error(`Invalid secretKey, received ${secretKeyU8a.length} bytes, expected 64`);
  }

  return sr25519Agree(publicKeyU8a, secretKeyU8a);
}
