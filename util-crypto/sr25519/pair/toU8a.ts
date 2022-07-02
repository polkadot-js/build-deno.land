// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types.ts';

import { u8aConcat } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

export function sr25519KeypairToU8a ({ publicKey, secretKey }: Keypair): Uint8Array {
  return u8aConcat(secretKey, publicKey).slice();
}
