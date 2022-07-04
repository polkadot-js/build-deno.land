// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.3/util/types.ts';

import { pbkdf2 as pbkdf2Js } from 'https://esm.sh/@noble/hashes@1.1.2/pbkdf2.js';
import { sha512 } from 'https://esm.sh/@noble/hashes@1.1.2/sha512.js';

import { hasBigInt, u8aToU8a } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import { isReady, pbkdf2 } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto/mod.ts';

import { randomAsU8a } from '../random/asU8a.ts';

interface Result {
  password: Uint8Array;
  rounds: number;
  salt: Uint8Array;
}

export function pbkdf2Encode (passphrase?: HexString | Buffer | Uint8Array | string, salt: Buffer | Uint8Array = randomAsU8a(), rounds = 2048, onlyJs?: boolean): Result {
  const u8aPass = u8aToU8a(passphrase);
  const u8aSalt = u8aToU8a(salt);

  return {
    password: !hasBigInt || (!onlyJs && isReady())
      ? pbkdf2(u8aPass, u8aSalt, rounds)
      : pbkdf2Js(sha512, u8aPass, u8aSalt, { c: rounds, dkLen: 64 }),
    rounds,
    salt
  };
}
