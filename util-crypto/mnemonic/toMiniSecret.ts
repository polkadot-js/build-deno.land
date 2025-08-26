
import { stringToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';
import { bip39ToMiniSecret, isReady } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

import { pbkdf2Encode } from '../pbkdf2/index.ts';
import { mnemonicToEntropy } from './toEntropy.ts';
import { mnemonicValidate } from './validate.ts';

/**
 * @param mnemonic - The BIP-39 mnemonic phrase to derive the secret from.
 * @param password - Optional: password to secure the seed (default: empty string).
 * @param wordlist - Optional custom wordlist for mnemonic.
 * @param onlyJs - Optional: If `true`, forces use of the JavaScript implementation instead of WASM.
 * @param rounds - Optional: Number of PBKDF2 iterations to run (default: 210000 (when onlyJS = true) or 2048 (when onlyJS = false).
*/
export function mnemonicToMiniSecret (mnemonic: string, password = '', wordlist?: string[], onlyJs?: boolean, rounds?: number): Uint8Array {
  if (!mnemonicValidate(mnemonic, wordlist, onlyJs)) {
    throw new Error('Invalid bip39 mnemonic specified');
  } else if (!wordlist && !onlyJs && isReady()) {
    return bip39ToMiniSecret(mnemonic, password);
  }

  const entropy = mnemonicToEntropy(mnemonic, wordlist);
  const salt = stringToU8a(`mnemonic${password}`);

  // return the first 32 bytes as the seed
  return pbkdf2Encode(entropy, salt, rounds).password.slice(0, 32);
}
