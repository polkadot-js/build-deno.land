// Copyright 2017-2022 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PairInfo } from './types.ts';

import { assert, u8aConcat } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import { naclEncrypt, scryptEncode, scryptToU8a } from 'https://deno.land/x/polkadot@0.0.2/util-crypto/mod.ts';

import { PKCS8_DIVIDER, PKCS8_HEADER } from './defaults.ts';

export function encodePair ({ publicKey, secretKey }: PairInfo, passphrase?: string): Uint8Array {
  assert(secretKey, 'Expected a valid secretKey to be passed to encode');

  const encoded = u8aConcat(
    PKCS8_HEADER,
    secretKey,
    PKCS8_DIVIDER,
    publicKey
  );

  if (!passphrase) {
    return encoded;
  }

  const { params, password, salt } = scryptEncode(passphrase);
  const { encrypted, nonce } = naclEncrypt(encoded, password.subarray(0, 32));

  return u8aConcat(scryptToU8a(salt, params), nonce, encrypted);
}
