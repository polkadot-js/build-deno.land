
import { stringToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';
import { bip39ToMiniSecret, isReady } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

import { pbkdf2Encode } from '../pbkdf2/index.ts';
import { mnemonicToEntropy } from './toEntropy.ts';
import { mnemonicValidate } from './validate.ts';

export function mnemonicToMiniSecret (mnemonic: string, password = '', wordlist?: string[], onlyJs?: boolean): Uint8Array {
  if (!mnemonicValidate(mnemonic, wordlist, onlyJs)) {
    throw new Error('Invalid bip39 mnemonic specified');
  } else if (!wordlist && !onlyJs && isReady()) {
    return bip39ToMiniSecret(mnemonic, password);
  }

  const entropy = mnemonicToEntropy(mnemonic, wordlist);
  const salt = stringToU8a(`mnemonic${password}`);

  // return the first 32 bytes as the seed
  return pbkdf2Encode(entropy, salt).password.slice(0, 32);
}
