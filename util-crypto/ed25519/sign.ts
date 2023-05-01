
import type { HexString } from 'https://deno.land/x/polkadot@0.2.38/util/types.ts';
import type { Keypair } from '../types.ts';

import { ed25519 } from 'https://esm.sh/@noble/curves@1.0.0/ed25519.js';

import { hasBigInt, u8aToU8a } from 'https://deno.land/x/polkadot@0.2.38/util/mod.ts';
import { ed25519Sign as wasmSign, isReady } from 'https://deno.land/x/polkadot@0.2.38/wasm-crypto/mod.ts';

/**
 * @name ed25519Sign
 * @summary Signs a message using the supplied secretKey
 * @description
 * Returns message signature of `message`, using the `secretKey`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { ed25519Sign } from 'https://deno.land/x/polkadot@0.2.38/util-crypto/mod.ts';
 *
 * ed25519Sign([...], [...]); // => [...]
 * ```
 */
export function ed25519Sign (message: HexString | Uint8Array | string, { publicKey, secretKey }: Partial<Keypair>, onlyJs?: boolean): Uint8Array {
  if (!secretKey) {
    throw new Error('Expected a valid secretKey');
  } else if (!publicKey) {
    throw new Error('Expected a valid publicKey');
  }

  const messageU8a = u8aToU8a(message);
  const privateU8a = secretKey.subarray(0, 32);

  return !hasBigInt || (!onlyJs && isReady())
    ? wasmSign(publicKey, privateU8a, messageU8a)
    : ed25519.sign(messageU8a, privateU8a);
}
