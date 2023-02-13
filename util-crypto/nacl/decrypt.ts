
import nacl from 'https://esm.sh/tweetnacl@1.0.3';

/**
 * @name naclDecrypt
 * @summary Decrypts a message using the supplied secretKey and nonce
 * @description
 * Returns an decrypted message, using the `secret` and `nonce`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclDecrypt } from 'https://deno.land/x/polkadot@0.2.27/util-crypto/mod.ts';
 *
 * naclDecrypt([...], [...], [...]); // => [...]
 * ```
 */
export function naclDecrypt (encrypted: Uint8Array, nonce: Uint8Array, secret: Uint8Array): Uint8Array | null {
  return nacl.secretbox.open(encrypted, nonce, secret) || null;
}
