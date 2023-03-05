
import type { Keypair } from '../../types.ts';

import { randomAsU8a } from '../../random/index.ts';
import { ed25519PairFromSeed } from './fromSeed.ts';

/**
 * @name ed25519PairFromRandom
 * @summary Creates a new public/secret keypair.
 * @description
 * Returns a new generate object containing a `publicKey` & `secretKey`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { ed25519PairFromRandom } from 'https://deno.land/x/polkadot@0.2.29/util-crypto/mod.ts';
 *
 * ed25519PairFromRandom(); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function ed25519PairFromRandom (): Keypair {
  return ed25519PairFromSeed(randomAsU8a());
}
