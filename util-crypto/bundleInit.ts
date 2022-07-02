// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import 'https://deno.land/x/polkadot@0.0.2/x-bigint/shim.ts';

import { utils as utilsNobleSecp256k1 } from 'https://esm.sh/@noble/secp256k1@1.6.0';

import { u8aConcat } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

import { cryptoWaitReady } from './crypto.ts';
import { hmacSha256AsU8a } from './hmac/index.ts';

// Set overrides on the secp256k1 utils
//   - hmacShaSync - This needs to be set, unset by default
utilsNobleSecp256k1.hmacSha256Sync = (key: Uint8Array, ...messages: Uint8Array[]) =>
  hmacSha256AsU8a(key, u8aConcat(...messages));

// start init process immediately
cryptoWaitReady().catch((): void => {
  // shouldn't happen, logged and caught inside cryptoWaitReady
});
