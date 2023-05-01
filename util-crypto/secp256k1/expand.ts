
import { secp256k1 } from 'https://esm.sh/@noble/curves@1.0.0/secp256k1.js';

import { bnToU8a, hasBigInt, u8aConcat } from 'https://deno.land/x/polkadot@0.2.38/util/mod.ts';
import { isReady, secp256k1Expand as wasm } from 'https://deno.land/x/polkadot@0.2.38/wasm-crypto/mod.ts';

import { BN_BE_256_OPTS } from '../bn.ts';

export function secp256k1Expand (publicKey: Uint8Array, onlyJs?: boolean): Uint8Array {
  if (![33, 65].includes(publicKey.length)) {
    throw new Error(`Invalid publicKey provided, received ${publicKey.length} bytes input`);
  }

  if (publicKey.length === 65) {
    return publicKey.subarray(1);
  }

  if (!hasBigInt || (!onlyJs && isReady())) {
    return wasm(publicKey).subarray(1);
  }

  const { px, py } = secp256k1.ProjectivePoint.fromHex(publicKey);

  return u8aConcat(
    bnToU8a(px, BN_BE_256_OPTS),
    bnToU8a(py, BN_BE_256_OPTS)
  );
}
