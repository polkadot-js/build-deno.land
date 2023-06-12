
import type { BN } from 'https://deno.land/x/polkadot@0.2.41/util/mod.ts';
import type { HexString } from 'https://deno.land/x/polkadot@0.2.41/util/types.ts';

import { bnToU8a, compactToU8a, stringToU8a, u8aConcat, u8aSorted } from 'https://deno.land/x/polkadot@0.2.41/util/mod.ts';

import { blake2AsU8a } from '../blake2/asU8a.ts';
import { BN_LE_16_OPTS } from '../bn.ts';
import { addressToU8a } from './util.ts';

const PREFIX = stringToU8a('modlpy/utilisuba');

export function createKeyMulti (who: (HexString | Uint8Array | string)[], threshold: bigint | BN | number): Uint8Array {
  return blake2AsU8a(
    u8aConcat(
      PREFIX,
      compactToU8a(who.length),
      ...u8aSorted(who.map(addressToU8a)),
      bnToU8a(threshold, BN_LE_16_OPTS)
    )
  );
}
