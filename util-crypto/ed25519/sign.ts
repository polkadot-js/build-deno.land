// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.2/util/types.ts';
import type { Keypair } from '../types.ts';

import nacl from 'https://esm.sh/tweetnacl@1.0.3';

import { assert, u8aToU8a } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import { ed25519Sign as wasmSign, isReady } from 'https://deno.land/x/polkadot@0.0.2/wasm-crypto/mod.ts';

/**
 * @name ed25519Sign
 * @summary Signs a message using the supplied secretKey
 * @description
 * Returns message signature of `message`, using the `secretKey`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { ed25519Sign } from 'https://deno.land/x/polkadot@0.0.2/util-crypto/mod.ts';
 *
 * ed25519Sign([...], [...]); // => [...]
 * ```
 */
export function ed25519Sign (message: HexString | Uint8Array | string, { publicKey, secretKey }: Partial<Keypair>, onlyJs?: boolean): Uint8Array {
  assert(secretKey, 'Expected a valid secretKey');

  const messageU8a = u8aToU8a(message);

  return !onlyJs && isReady()
    ? wasmSign(publicKey as Uint8Array, secretKey.subarray(0, 32), messageU8a)
    : nacl.sign.detached(messageU8a, secretKey);
}
