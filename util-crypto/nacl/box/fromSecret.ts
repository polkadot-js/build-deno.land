
import type { Keypair } from '../../types.ts';

import nacl from 'https://esm.sh/tweetnacl@1.0.3';

/**
 * @name naclBoxPairFromSecret
 * @summary Creates a new public/secret box keypair from a secret.
 * @description
 * Returns a object containing a box `publicKey` & `secretKey` generated from the supplied secret.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclBoxPairFromSecret } from 'https://deno.land/x/polkadot@0.2.34/util-crypto/mod.ts';
 *
 * naclBoxPairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function naclBoxPairFromSecret (secret: Uint8Array): Keypair {
  return nacl.box.keyPair.fromSecretKey(secret.slice(0, 32));
}
