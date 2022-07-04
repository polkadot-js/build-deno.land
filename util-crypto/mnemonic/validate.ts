// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasBigInt } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import { bip39Validate, isReady } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto/mod.ts';

import { validateMnemonic } from './bip39.ts';

/**
 * @name mnemonicValidate
 * @summary Validates a mnemonic input using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate, mnemonicValidate } from 'https://deno.land/x/polkadot@0.0.3/util-crypto/mod.ts';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean
 * ```
 */
export function mnemonicValidate (mnemonic: string, onlyJs?: boolean): boolean {
  return !hasBigInt || (!onlyJs && isReady())
    ? bip39Validate(mnemonic)
    : validateMnemonic(mnemonic);
}
