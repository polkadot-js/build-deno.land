
import type { Keypair } from '../types.ts';
import type { HashType } from './types.ts';

import { secp256k1 } from 'https://esm.sh/@noble/curves@1.3.0/secp256k1.js';

import { bnToU8a, hasBigInt, u8aConcat } from 'https://deno.land/x/polkadot@0.2.45/util/mod.ts';
import { isReady, secp256k1Sign as wasm } from 'https://deno.land/x/polkadot@0.2.45/wasm-crypto/mod.ts';

import { BN_BE_256_OPTS } from '../bn.ts';
import { hasher } from './hasher.ts';

/**
 * @name secp256k1Sign
 * @description Returns message signature of `message`, using the supplied pair
 */
export function secp256k1Sign (message: Uint8Array | string, { secretKey }: Partial<Keypair>, hashType: HashType = 'blake2', onlyJs?: boolean): Uint8Array {
  if (secretKey?.length !== 32) {
    throw new Error('Expected valid secp256k1 secretKey, 32-bytes');
  }

  const data = hasher(hashType, message, onlyJs);

  if (!hasBigInt || (!onlyJs && isReady())) {
    return wasm(data, secretKey);
  }

  const signature = secp256k1.sign(data, secretKey, { lowS: true });

  return u8aConcat(
    bnToU8a(signature.r, BN_BE_256_OPTS),
    bnToU8a(signature.s, BN_BE_256_OPTS),
    new Uint8Array([signature.recovery || 0])
  );
}
