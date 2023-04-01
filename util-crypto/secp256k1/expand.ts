
import { Point } from 'https://esm.sh/@noble/secp256k1@1.7.1';

import { bnToU8a, hasBigInt, u8aConcat } from 'https://deno.land/x/polkadot/util/mod.ts';
import { isReady, secp256k1Expand as wasm } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

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

  const { x, y } = Point.fromHex(publicKey);

  return u8aConcat(
    bnToU8a(x, BN_BE_256_OPTS),
    bnToU8a(y, BN_BE_256_OPTS)
  );
}
