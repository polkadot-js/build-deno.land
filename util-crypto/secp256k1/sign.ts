// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../types.ts';
import type { HashType } from './types.ts';

import { Signature, signSync } from 'https://esm.sh/@noble/secp256k1@1.6.0';

import { bnToU8a, hasBigInt, u8aConcat } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import { isReady, secp256k1Sign as wasm } from 'https://deno.land/x/polkadot@0.0.2/wasm-crypto/mod.ts';

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

  const [sigBytes, recoveryParam] = signSync(data, secretKey, { canonical: true, recovered: true });
  const { r, s } = Signature.fromHex(sigBytes);

  return u8aConcat(
    bnToU8a(r, BN_BE_256_OPTS),
    bnToU8a(s, BN_BE_256_OPTS),
    new Uint8Array([recoveryParam || 0])
  );
}
