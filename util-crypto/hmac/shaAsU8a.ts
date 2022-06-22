// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hmac } from 'https://cdn.skypack.dev/@noble/hashes@1.1.2/hmac.js';
import { sha256 } from 'https://cdn.skypack.dev/@noble/hashes@1.1.2/sha256.js';
import { sha512 } from 'https://cdn.skypack.dev/@noble/hashes@1.1.2/sha512.js';

import { hasBigInt, u8aToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';
import { hmacSha256, hmacSha512, isReady } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

const JS_HASH = {
  256: sha256,
  512: sha512
};

const WA_MHAC = {
  256: hmacSha256,
  512: hmacSha512
};

function createSha (bitLength: 256 | 512): (key: Uint8Array | string, data: Uint8Array, onlyJs?: boolean) => Uint8Array {
  return (key: Uint8Array | string, data: Uint8Array, onlyJs?: boolean): Uint8Array =>
    hmacShaAsU8a(key, data, bitLength, onlyJs);
}

/**
 * @name hmacShaAsU8a
 * @description creates a Hmac Sha (256/512) Uint8Array from the key & data
 */
export function hmacShaAsU8a (key: Uint8Array | string, data: Uint8Array, bitLength: 256 | 512 = 256, onlyJs?: boolean): Uint8Array {
  const u8aKey = u8aToU8a(key);

  return !hasBigInt || (!onlyJs && isReady())
    ? WA_MHAC[bitLength](u8aKey, data)
    : hmac(JS_HASH[bitLength], u8aKey, data);
}

/**
 * @name hmacSha256AsU8a
 * @description creates a Hmac Sha256 Uint8Array from the key & data
 */
export const hmacSha256AsU8a = createSha(256);

/**
 * @name hmacSha512AsU8a
 * @description creates a Hmac Sha512 Uint8Array from the key & data
 */
export const hmacSha512AsU8a = createSha(512);