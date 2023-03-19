
import type { EncryptedJson } from './types.ts';

import { hexToU8a, isHex } from 'https://deno.land/x/polkadot@0.2.32/util/mod.ts';

import { base64Decode } from '../base64/index.ts';
import { jsonDecryptData } from './decryptData.ts';

export function jsonDecrypt ({ encoded, encoding }: EncryptedJson, passphrase?: string | null): Uint8Array {
  if (!encoded) {
    throw new Error('No encrypted data available to decode');
  }

  return jsonDecryptData(
    isHex(encoded)
      ? hexToU8a(encoded)
      : base64Decode(encoded),
    passphrase,
    Array.isArray(encoding.type)
      ? encoding.type
      : [encoding.type]
  );
}
