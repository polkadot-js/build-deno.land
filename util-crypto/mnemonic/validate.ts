
import { hasBigInt } from 'https://deno.land/x/polkadot/util/mod.ts';
import { bip39Validate, isReady } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

import { validateMnemonic } from './bip39.ts';

/**
 * @name mnemonicValidate
 * @summary Validates a mnemonic input using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate, mnemonicValidate } from 'https://deno.land/x/polkadot/util-crypto/mod.ts';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean
 * ```
 */
export function mnemonicValidate (mnemonic: string, wordlist?: string[], onlyJs?: boolean): boolean {
  return !hasBigInt || (!wordlist && !onlyJs && isReady())
    ? bip39Validate(mnemonic)
    : validateMnemonic(mnemonic, wordlist);
}
