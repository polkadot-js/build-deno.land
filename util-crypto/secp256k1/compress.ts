
import { Point } from 'https://esm.sh/@noble/secp256k1@1.7.1';

import { hasBigInt } from 'https://deno.land/x/polkadot/util/mod.ts';
import { isReady, secp256k1Compress as wasm } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

export function secp256k1Compress (publicKey: Uint8Array, onlyJs?: boolean): Uint8Array {
  if (![33, 65].includes(publicKey.length)) {
    throw new Error(`Invalid publicKey provided, received ${publicKey.length} bytes input`);
  }

  if (publicKey.length === 33) {
    return publicKey;
  }

  return !hasBigInt || (!onlyJs && isReady())
    ? wasm(publicKey)
    : Point.fromHex(publicKey).toRawBytes(true);
}
