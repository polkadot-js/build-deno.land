// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.3/util/types.ts';
import type { HashType } from './types.ts';

import { recoverPublicKey, Signature } from 'https://esm.sh/@noble/secp256k1@1.6.0';

import { hasBigInt, u8aToU8a } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import { isReady, secp256k1Recover as wasm } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto/mod.ts';

import { secp256k1Compress } from './compress.ts';
import { secp256k1Expand } from './expand.ts';

/**
 * @name secp256k1Recover
 * @description Recovers a publicKey from the supplied signature
 */
export function secp256k1Recover (msgHash: HexString | Uint8Array | string, signature: HexString | Uint8Array | string, recovery: number, hashType: HashType = 'blake2', onlyJs?: boolean): Uint8Array {
  const sig = u8aToU8a(signature).subarray(0, 64);
  const msg = u8aToU8a(msgHash);
  const publicKey = !hasBigInt || (!onlyJs && isReady())
    ? wasm(msg, sig, recovery)
    : recoverPublicKey(msg, Signature.fromCompact(sig).toRawBytes(), recovery);

  if (!publicKey) {
    throw new Error('Unable to recover publicKey from signature');
  }

  return hashType === 'keccak'
    ? secp256k1Expand(publicKey, onlyJs)
    : secp256k1Compress(publicKey, onlyJs);
}
