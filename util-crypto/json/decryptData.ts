// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EncryptedJsonEncoding } from './types.ts';

import { stringToU8a, u8aFixLength } from 'https://deno.land/x/polkadot@0.2.18/util/mod.ts';

import { naclDecrypt } from '../nacl/index.ts';
import { scryptEncode, scryptFromU8a } from '../scrypt/index.ts';
import { ENCODING, NONCE_LENGTH, SCRYPT_LENGTH } from './constants.ts';

export function jsonDecryptData (encrypted?: Uint8Array | null, passphrase?: string | null, encType: EncryptedJsonEncoding[] = ENCODING): Uint8Array {
  if (!encrypted) {
    throw new Error('No encrypted data available to decode');
  } else if (encType.includes('xsalsa20-poly1305') && !passphrase) {
    throw new Error('Password required to decode encrypted data');
  }

  let encoded: Uint8Array | null = encrypted;

  if (passphrase) {
    let password: Uint8Array;

    if (encType.includes('scrypt')) {
      const { params, salt } = scryptFromU8a(encrypted);

      password = scryptEncode(passphrase, salt, params).password;
      encrypted = encrypted.subarray(SCRYPT_LENGTH);
    } else {
      password = stringToU8a(passphrase);
    }

    encoded = naclDecrypt(
      encrypted.subarray(NONCE_LENGTH),
      encrypted.subarray(0, NONCE_LENGTH),
      u8aFixLength(password, 256, true)
    );
  }

  if (!encoded) {
    throw new Error('Unable to decode using the supplied passphrase');
  }

  return encoded;
}
