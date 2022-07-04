// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.3/util/types.ts';
import type { Prefix } from './types.ts';

import { u8aSorted } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import { encodeAddress } from './encode.ts';
import { addressToU8a } from './util.ts';

export function sortAddresses (addresses: (HexString | Uint8Array | string)[], ss58Format?: Prefix): string[] {
  const u8aToAddress = (u8a: Uint8Array) => encodeAddress(u8a, ss58Format);

  return u8aSorted(
    addresses.map(addressToU8a)
  ).map(u8aToAddress);
}
