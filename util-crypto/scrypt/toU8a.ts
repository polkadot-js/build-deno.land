
import type { ScryptParams } from './types.ts';

import { bnToU8a, u8aConcat } from 'https://deno.land/x/polkadot/util/mod.ts';

import { BN_LE_32_OPTS } from '../bn.ts';

export function scryptToU8a (salt: Uint8Array, { N, p, r }: ScryptParams): Uint8Array {
  return u8aConcat(
    salt,
    bnToU8a(N, BN_LE_32_OPTS),
    bnToU8a(p, BN_LE_32_OPTS),
    bnToU8a(r, BN_LE_32_OPTS)
  );
}
