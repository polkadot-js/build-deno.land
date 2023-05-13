
import type { Params } from './types.ts';

import { bnToU8a, u8aConcat } from 'https://deno.land/x/polkadot@0.2.39/util/mod.ts';

import { BN_LE_32_OPTS } from '../bn.ts';

export function scryptToU8a (salt: Uint8Array, { N, p, r }: Params): Uint8Array {
  return u8aConcat(
    salt,
    bnToU8a(N, BN_LE_32_OPTS),
    bnToU8a(p, BN_LE_32_OPTS),
    bnToU8a(r, BN_LE_32_OPTS)
  );
}
