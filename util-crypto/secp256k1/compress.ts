
import { Point } from 'https://esm.sh/@noble/secp256k1@1.7.1';

import { hasBigInt } from 'https://deno.land/x/polkadot@0.2.32/util/mod.ts';
import { isReady, secp256k1Compress as wasm } from 'https://deno.land/x/polkadot@0.2.32/wasm-crypto/mod.ts';

export function secp256k1Compress (publicKey: Uint8Array, onlyJs?: boolean): Uint8Array {
  if (publicKey.length === 33) {
    return publicKey;
  }

  if (publicKey.length !== 65) {
    throw new Error('Invalid publicKey provided');
  }

  return !hasBigInt || (!onlyJs && isReady())
    ? wasm(publicKey)
    : Point.fromHex(publicKey).toRawBytes(true);
}
