// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.3/util/types.ts';
import type { Params } from './types.ts';

import { scrypt as scryptJs } from 'https://esm.sh/@noble/hashes@1.1.2/scrypt.js';

import { hasBigInt, objectSpread, u8aToU8a } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import { isReady, scrypt } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto/mod.ts';

import { randomAsU8a } from '../random/asU8a.ts';
import { DEFAULT_PARAMS } from './defaults.ts';

interface Result {
  params: Params,
  password: Uint8Array;
  salt: Uint8Array;
}

export function scryptEncode (passphrase?: HexString | Uint8Array | string, salt = randomAsU8a(), params = DEFAULT_PARAMS, onlyJs?: boolean): Result {
  const u8a = u8aToU8a(passphrase);

  return {
    params,
    password: !hasBigInt || (!onlyJs && isReady())
      ? scrypt(u8a, salt, Math.log2(params.N), params.r, params.p)
      : scryptJs(u8a, salt, objectSpread({ dkLen: 64 }, params)),
    salt
  };
}
