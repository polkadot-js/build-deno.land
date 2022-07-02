// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.2/util/types.ts';

import nacl from 'https://esm.sh/tweetnacl@1.0.3';

import { assert, u8aToU8a } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import { ed25519Verify as wasmVerify, isReady } from 'https://deno.land/x/polkadot@0.0.2/wasm-crypto/mod.ts';

/**
 * @name ed25519Sign
 * @summary Verifies the signature on the supplied message.
 * @description
 * Verifies the `signature` on `message` with the supplied `publicKey`. Returns `true` on sucess, `false` otherwise.
 * @example
 * <BR>
 *
 * ```javascript
 * import { ed25519Verify } from 'https://deno.land/x/polkadot@0.0.2/util-crypto/mod.ts';
 *
 * ed25519Verify([...], [...], [...]); // => true/false
 * ```
 */
export function ed25519Verify (message: HexString | Uint8Array | string, signature: HexString | Uint8Array | string, publicKey: HexString | Uint8Array | string, onlyJs?: boolean): boolean {
  const messageU8a = u8aToU8a(message);
  const publicKeyU8a = u8aToU8a(publicKey);
  const signatureU8a = u8aToU8a(signature);

  assert(publicKeyU8a.length === 32, () => `Invalid publicKey, received ${publicKeyU8a.length}, expected 32`);
  assert(signatureU8a.length === 64, () => `Invalid signature, received ${signatureU8a.length} bytes, expected 64`);

  return !onlyJs && isReady()
    ? wasmVerify(signatureU8a, messageU8a, publicKeyU8a)
    : nacl.sign.detached.verify(messageU8a, signatureU8a, publicKeyU8a);
}
