
import { secp256k1 } from 'https://esm.sh/@noble/curves@1.0.0/secp256k1.js';

import { hasBigInt } from 'https://deno.land/x/polkadot@0.2.40/util/mod.ts';
import { isReady, secp256k1Compress as wasm } from 'https://deno.land/x/polkadot@0.2.40/wasm-crypto/mod.ts';

export function secp256k1Compress (publicKey: Uint8Array, onlyJs?: boolean): Uint8Array {
  if (![33, 65].includes(publicKey.length)) {
    throw new Error(`Invalid publicKey provided, received ${publicKey.length} bytes input`);
  }

  if (publicKey.length === 33) {
    return publicKey;
  }

  return !hasBigInt || (!onlyJs && isReady())
    ? wasm(publicKey)
    : secp256k1.ProjectivePoint.fromHex(publicKey).toRawBytes(true);
}
