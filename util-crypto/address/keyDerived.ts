
import type { BN } from 'https://deno.land/x/polkadot/util/mod.ts';

import { bnToU8a, stringToU8a, u8aConcat } from 'https://deno.land/x/polkadot/util/mod.ts';

import { blake2AsU8a } from '../blake2/asU8a.ts';
import { BN_LE_16_OPTS } from '../bn.ts';
import { decodeAddress } from './decode.ts';

const PREFIX = stringToU8a('modlpy/utilisuba');

export function createKeyDerived (who: string | Uint8Array, index: bigint | BN | number): Uint8Array {
  return blake2AsU8a(
    u8aConcat(
      PREFIX,
      decodeAddress(who),
      bnToU8a(index, BN_LE_16_OPTS)
    )
  );
}
