
import 'https://deno.land/x/polkadot@0.2.30/x-bigint/shim.ts';

import { utils as utilsNobleSecp256k1 } from 'https://esm.sh/@noble/secp256k1@1.7.1';

import { u8aConcat } from 'https://deno.land/x/polkadot@0.2.30/util/mod.ts';

import { hmacSha256AsU8a } from './hmac/index.ts';
import { cryptoWaitReady } from './crypto.ts';

utilsNobleSecp256k1.hmacSha256Sync = (key: Uint8Array, ...messages: Uint8Array[]) =>
  hmacSha256AsU8a(key, u8aConcat(...messages));

cryptoWaitReady().catch((): void => {
  // shouldn't happen, logged and caught inside cryptoWaitReady
});
