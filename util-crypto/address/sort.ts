
import type { Prefix } from './types.ts';

import { u8aSorted } from 'https://deno.land/x/polkadot@0.2.45/util/mod.ts';

import { encodeAddress } from './encode.ts';
import { addressToU8a } from './util.ts';

export function sortAddresses (addresses: (string | Uint8Array)[], ss58Format?: Prefix): string[] {
  const u8aToAddress = (u8a: Uint8Array) => encodeAddress(u8a, ss58Format);

  return u8aSorted(
    addresses.map(addressToU8a)
  ).map(u8aToAddress);
}
