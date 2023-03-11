
import { hasBigInt } from 'https://deno.land/x/polkadot/util/mod.ts';
import { bip39ToEntropy, isReady } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

import { mnemonicToEntropy as jsToEntropy } from './bip39.ts';

export function mnemonicToEntropy (mnemonic: string, onlyJs?: boolean): Uint8Array {
  return !hasBigInt || (!onlyJs && isReady())
    ? bip39ToEntropy(mnemonic)
    : jsToEntropy(mnemonic);
}
