
import { hasBigInt } from 'https://deno.land/x/polkadot@0.2.45/util/mod.ts';
import { bip39Generate, isReady } from 'https://deno.land/x/polkadot@0.2.45/wasm-crypto/mod.ts';

import { generateMnemonic } from './bip39.ts';

/**
 * @name mnemonicGenerate
 * @summary Creates a valid mnemonic string using using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate } from 'https://deno.land/x/polkadot@0.2.45/util-crypto/mod.ts';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * ```
 */
export function mnemonicGenerate (numWords: 12 | 15 | 18 | 21 | 24 = 12, wordlist?: string[], onlyJs?: boolean): string {
  return !hasBigInt || (!wordlist && !onlyJs && isReady())
    ? bip39Generate(numWords)
    : generateMnemonic(numWords, wordlist);
}
