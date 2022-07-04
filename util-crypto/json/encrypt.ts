// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EncryptedJson } from './types.ts';

import { u8aConcat } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import { naclEncrypt } from '../nacl/index.ts';
import { scryptEncode, scryptToU8a } from '../scrypt/index.ts';
import { jsonEncryptFormat } from './encryptFormat.ts';

export function jsonEncrypt (data: Uint8Array, contentType: string[], passphrase?: string | null): EncryptedJson {
  let isEncrypted = false;
  let encoded = data;

  if (passphrase) {
    const { params, password, salt } = scryptEncode(passphrase);
    const { encrypted, nonce } = naclEncrypt(encoded, password.subarray(0, 32));

    isEncrypted = true;
    encoded = u8aConcat(scryptToU8a(salt, params), nonce, encrypted);
  }

  return jsonEncryptFormat(encoded, contentType, isEncrypted);
}
