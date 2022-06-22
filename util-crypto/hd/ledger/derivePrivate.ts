// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BN_EIGHT, bnToU8a, u8aConcat, u8aToBn } from 'https://deno.land/x/polkadot@0.0.0-7/util/mod.ts';

import { BN_LE_32_OPTS, BN_LE_512_OPTS, BN_LE_OPTS } from '../../bn.ts';
import { hmacShaAsU8a } from '../../hmac/index.ts';

// performs hard-only derivation on the xprv
export function ledgerDerivePrivate (xprv: Uint8Array, index: number): Uint8Array {
  const kl = xprv.subarray(0, 32);
  const kr = xprv.subarray(32, 64);
  const cc = xprv.subarray(64, 96);
  const data = u8aConcat([0], kl, kr, bnToU8a(index, BN_LE_32_OPTS));
  const z = hmacShaAsU8a(cc, data, 512);

  data[0] = 0x01;

  return u8aConcat(
    bnToU8a(
      u8aToBn(kl, BN_LE_OPTS).iadd(
        u8aToBn(z.subarray(0, 28), BN_LE_OPTS).imul(BN_EIGHT)
      ),
      BN_LE_512_OPTS
    ).subarray(0, 32),
    bnToU8a(
      u8aToBn(kr, BN_LE_OPTS).iadd(
        u8aToBn(z.subarray(32, 64), BN_LE_OPTS)
      ),
      BN_LE_512_OPTS
    ).subarray(0, 32),
    hmacShaAsU8a(cc, data, 512).subarray(32, 64)
  );
}
