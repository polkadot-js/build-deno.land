// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import nacl from 'https://esm.sh/tweetnacl@1.0.3';

/**
 * @name naclOpen
 * @summary Opens a message using the receiver's secretKey and nonce
 * @description
 * Returns a message sealed by the sender, using the receiver's `secret` and `nonce`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclOpen } from 'https://deno.land/x/polkadot@0.0.2/util-crypto/mod.ts';
 *
 * naclOpen([...], [...], [...]); // => [...]
 * ```
 */
export function naclOpen (sealed: Uint8Array, nonce: Uint8Array, senderBoxPublic: Uint8Array, receiverBoxSecret: Uint8Array): Uint8Array | null {
  return nacl.box.open(sealed, nonce, senderBoxPublic, receiverBoxSecret) || null;
}
