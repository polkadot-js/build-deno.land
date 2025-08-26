
import { pbkdf2 as pbkdf2Js } from 'https://esm.sh/@noble/hashes@1.3.3/pbkdf2.js';
import { sha512 } from 'https://esm.sh/@noble/hashes@1.3.3/sha512.js';

import { hasBigInt, u8aToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';
import { isReady, pbkdf2 } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

import { randomAsU8a } from '../random/asU8a.ts';

interface Result {
  password: Uint8Array;
  rounds: number;
  salt: Uint8Array;
}

export function pbkdf2Encode (passphrase?: string | Uint8Array, salt: Uint8Array = randomAsU8a(), rounds = 210000, onlyJs?: boolean): Result {
  // When using the JS implementation (pbkdf2Js), large iteration counts can
  // cause excessive computation time or memory usage. In that case, we cap
  // the number of rounds to 2048 to ensure reliable performance.
  if (onlyJs && rounds > 2048) {
    rounds = 2048;
  }

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
