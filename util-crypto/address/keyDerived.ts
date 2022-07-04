// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import type { HexString } from 'https://deno.land/x/polkadot@0.0.3/util/types.ts';

import { bnToU8a, stringToU8a, u8aConcat } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import { blake2AsU8a } from '../blake2/asU8a.ts';
import { BN_LE_16_OPTS } from '../bn.ts';
import { decodeAddress } from './decode.ts';

const PREFIX = stringToU8a('modlpy/utilisuba');

export function createKeyDerived (who: HexString | Uint8Array | string, index: bigint | BN | number): Uint8Array {
  return blake2AsU8a(
    u8aConcat(
      PREFIX,
      decodeAddress(who),
      bnToU8a(index, BN_LE_16_OPTS)
    )
  );
}
