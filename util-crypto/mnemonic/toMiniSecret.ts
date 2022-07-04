// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { stringToU8a } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import { bip39ToMiniSecret, isReady } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto/mod.ts';

import { pbkdf2Encode } from '../pbkdf2/index.ts';
import { mnemonicToEntropy } from './toEntropy.ts';
import { mnemonicValidate } from './validate.ts';

export function mnemonicToMiniSecret (mnemonic: string, password = '', onlyJs?: boolean): Uint8Array {
  if (!mnemonicValidate(mnemonic)) {
    throw new Error('Invalid bip39 mnemonic specified');
  }

  if (!onlyJs && isReady()) {
    return bip39ToMiniSecret(mnemonic, password);
  }

  const entropy = mnemonicToEntropy(mnemonic);
  const salt = stringToU8a(`mnemonic${password}`);

  // return the first 32 bytes as the seed
  return pbkdf2Encode(entropy, salt).password.slice(0, 32);
}
