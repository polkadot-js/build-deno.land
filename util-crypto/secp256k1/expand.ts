// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Point } from 'https://esm.sh/@noble/secp256k1@1.6.0';

import { bnToU8a, hasBigInt, u8aConcat } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import { isReady, secp256k1Expand as wasm } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto/mod.ts';

import { BN_BE_256_OPTS } from '../bn.ts';

export function secp256k1Expand (publicKey: Uint8Array, onlyJs?: boolean): Uint8Array {
  if (publicKey.length === 65) {
    return publicKey.subarray(1);
  }

  if (publicKey.length !== 33) {
    throw new Error('Invalid publicKey provided');
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
