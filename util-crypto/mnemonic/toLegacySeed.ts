// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasBigInt } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import { bip39ToSeed, isReady } from 'https://deno.land/x/polkadot@0.0.2/wasm-crypto/mod.ts';

import { mnemonicToSeedSync } from './bip39.ts';
import { mnemonicValidate } from './validate.ts';

/**
 * @name mnemonicToLegacySeed
 * @summary Creates a valid Ethereum/Bitcoin-compatible seed from a mnemonic input
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate, mnemonicToLegacySeed, mnemonicValidate } from 'https://deno.land/x/polkadot@0.0.2/util-crypto/mod.ts';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean
 *
 * if (isValidMnemonic) {
 *   console.log(`Seed generated from mnemonic: ${mnemonicToLegacySeed(mnemonic)}`); => u8a
 * }
 * ```
 */
export function mnemonicToLegacySeed (mnemonic: string, password = '', onlyJs?: boolean, byteLength: 32 | 64 = 32): Uint8Array {
  if (!mnemonicValidate(mnemonic)) {
    throw new Error('Invalid bip39 mnemonic specified');
  } else if (![32, 64].includes(byteLength)) {
    throw new Error(`Invalid seed length ${byteLength}, expected 32 or 64`);
  }

  return byteLength === 32
    ? !hasBigInt || (!onlyJs && isReady())
      ? bip39ToSeed(mnemonic, password)
      : mnemonicToSeedSync(mnemonic, password).subarray(0, 32)
    : mnemonicToSeedSync(mnemonic, password);
}
