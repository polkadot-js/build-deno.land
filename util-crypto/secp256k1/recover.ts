
import type { HashType } from './types.ts';

import { secp256k1 } from 'https://esm.sh/@noble/curves@1.3.0/secp256k1.js';

import { hasBigInt, u8aToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';
import { isReady, secp256k1Recover as wasm } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

import { secp256k1Compress } from './compress.ts';
import { secp256k1Expand } from './expand.ts';

/**
 * @name secp256k1Recover
 * @description Recovers a publicKey from the supplied signature
 */
export function secp256k1Recover (msgHash: string | Uint8Array, signature: string | Uint8Array, recovery: number, hashType: HashType = 'blake2', onlyJs?: boolean): Uint8Array {
  const sig = u8aToU8a(signature).subarray(0, 64);
  const msg = u8aToU8a(msgHash);
  const publicKey = !hasBigInt || (!onlyJs && isReady())
    ? wasm(msg, sig, recovery)
    : secp256k1.Signature
      .fromCompact(sig)
      .addRecoveryBit(recovery)
      .recoverPublicKey(msg)
      .toRawBytes();

  if (!publicKey) {
    throw new Error('Unable to recover publicKey from signature');
  }

  return hashType === 'keccak'
    ? secp256k1Expand(publicKey, onlyJs)
    : secp256k1Compress(publicKey, onlyJs);
}
