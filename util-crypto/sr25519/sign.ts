// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.3/util/types.ts';
import type { Keypair } from '../types.ts';

import { u8aToU8a } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import { sr25519Sign as wasmSign } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto/mod.ts';

/**
 * @name sr25519Sign
 * @description Returns message signature of `message`, using the supplied pair
 */
export function sr25519Sign (message: HexString | Uint8Array | string, { publicKey, secretKey }: Partial<Keypair>): Uint8Array {
  if (publicKey?.length !== 32) {
    throw new Error('Expected a valid publicKey, 32-bytes');
  } else if (secretKey?.length !== 64) {
    throw new Error('Expected a valid secretKey, 64-bytes');
  }

  return wasmSign(publicKey, secretKey, u8aToU8a(message));
}
