
import type { Keypair } from '../../types.ts';

/**
 * @name ed25519PairFromSecret
 * @summary Creates a new public/secret keypair from a secret.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied secret.
 * @example
 * <BR>
 *
 * ```javascript
 * import { ed25519PairFromSecret } from 'https://deno.land/x/polkadot/util-crypto/mod.ts';
 *
 * ed25519PairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function ed25519PairFromSecret (secretKey: Uint8Array): Keypair {
  if (secretKey.length !== 64) {
    throw new Error('Invalid secretKey provided');
  }

  return {
    publicKey: secretKey.slice(32),
    secretKey
  };
}
