
import type { ScryptParams } from './types.ts';

import { scrypt as scryptJs } from 'https://esm.sh/@noble/hashes@1.3.2/scrypt.js';

import { hasBigInt, objectSpread, u8aToU8a } from 'https://deno.land/x/polkadot@0.2.43/util/mod.ts';
import { isReady, scrypt } from 'https://deno.land/x/polkadot@0.2.43/wasm-crypto/mod.ts';

import { randomAsU8a } from '../random/asU8a.ts';
import { DEFAULT_PARAMS } from './defaults.ts';

interface Result {
  params: ScryptParams,
  password: Uint8Array;
  salt: Uint8Array;
}

export function scryptEncode (passphrase?: string | Uint8Array, salt = randomAsU8a(), params = DEFAULT_PARAMS, onlyJs?: boolean): Result {
  const u8a = u8aToU8a(passphrase);

  return {
    params,
    password: !hasBigInt || (!onlyJs && isReady())
      ? scrypt(u8a, salt, Math.log2(params.N), params.r, params.p)
      : scryptJs(u8a, salt, objectSpread({ dkLen: 64 }, params)),
    salt
  };
}
