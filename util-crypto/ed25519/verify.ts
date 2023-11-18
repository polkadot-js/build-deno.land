
import { ed25519 } from 'https://esm.sh/@noble/curves@1.2.0/ed25519.js';

import { hasBigInt, u8aToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';
import { ed25519Verify as wasmVerify, isReady } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

/**
 * @name ed25519Sign
 * @summary Verifies the signature on the supplied message.
 * @description
 * Verifies the `signature` on `message` with the supplied `publicKey`. Returns `true` on sucess, `false` otherwise.
 * @example
 * <BR>
 *
 * ```javascript
 * import { ed25519Verify } from 'https://deno.land/x/polkadot/util-crypto/mod.ts';
 *
 * ed25519Verify([...], [...], [...]); // => true/false
 * ```
 */
export function ed25519Verify (message: string | Uint8Array, signature: string | Uint8Array, publicKey: string | Uint8Array, onlyJs?: boolean): boolean {
  const messageU8a = u8aToU8a(message);
  const publicKeyU8a = u8aToU8a(publicKey);
  const signatureU8a = u8aToU8a(signature);

  if (publicKeyU8a.length !== 32) {
    throw new Error(`Invalid publicKey, received ${publicKeyU8a.length}, expected 32`);
  } else if (signatureU8a.length !== 64) {
    throw new Error(`Invalid signature, received ${signatureU8a.length} bytes, expected 64`);
  }

  try {
    return !hasBigInt || (!onlyJs && isReady())
      ? wasmVerify(signatureU8a, messageU8a, publicKeyU8a)
      : ed25519.verify(signatureU8a, messageU8a, publicKeyU8a);
  } catch {
    return false;
  }
}
