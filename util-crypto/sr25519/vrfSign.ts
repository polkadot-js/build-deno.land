// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.2/util/types.ts';
import type { Keypair } from '../types.ts';

import { u8aToU8a } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import { vrfSign } from 'https://deno.land/x/polkadot@0.0.2/wasm-crypto/mod.ts';

const EMPTY_U8A = new Uint8Array();

/**
 * @name sr25519VrfSign
 * @description Sign with sr25519 vrf signing (deterministic)
 */
export function sr25519VrfSign (message: HexString | Uint8Array | string, { secretKey }: Partial<Keypair>, context: HexString | string | Uint8Array = EMPTY_U8A, extra: HexString | string | Uint8Array = EMPTY_U8A): Uint8Array {
  if (secretKey?.length !== 64) {
    throw new Error('Invalid secretKey, expected 64-bytes');
  }

  return vrfSign(secretKey, u8aToU8a(context), u8aToU8a(message), u8aToU8a(extra));
}
