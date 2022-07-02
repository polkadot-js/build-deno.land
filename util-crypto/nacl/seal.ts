// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import nacl from 'https://esm.sh/tweetnacl@1.0.3';

import { randomAsU8a } from '../random/asU8a.ts';

interface Sealed {
  sealed: Uint8Array;
  nonce: Uint8Array;
}

/**
 * @name naclSeal
 * @summary Seals a message using the sender's encrypting secretKey, receiver's public key, and nonce
 * @description
 * Returns an encrypted message which can be open only by receiver's secretKey. If the `nonce` was not supplied, a random value is generated.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclSeal } from 'https://deno.land/x/polkadot@0.0.2/util-crypto/mod.ts';
 *
 * naclSeal([...], [...], [...], [...]); // => [...]
 * ```
 */
export function naclSeal (message: Uint8Array, senderBoxSecret: Uint8Array, receiverBoxPublic: Uint8Array, nonce: Uint8Array = randomAsU8a(24)): Sealed {
  return {
    nonce,
    sealed: nacl.box(message, nonce, receiverBoxPublic, senderBoxSecret)
  };
}
