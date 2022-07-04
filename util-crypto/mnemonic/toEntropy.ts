// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasBigInt } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import { bip39ToEntropy, isReady } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto/mod.ts';

import { mnemonicToEntropy as jsToEntropy } from './bip39.ts';

export function mnemonicToEntropy (mnemonic: string, onlyJs?: boolean): Uint8Array {
  return !hasBigInt || (!onlyJs && isReady())
    ? bip39ToEntropy(mnemonic)
    : jsToEntropy(mnemonic);
}
