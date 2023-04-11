
import type { BN } from 'https://deno.land/x/polkadot@0.2.35/util/mod.ts';
import type { HexString } from 'https://deno.land/x/polkadot@0.2.35/util/types.ts';
import type { Prefix } from './types.ts';

import { encodeAddress } from './encode.ts';
import { createKeyMulti } from './keyMulti.ts';

/**
 * @name encodeMultiAddress
 * @summary Creates a multisig address.
 * @description
 * Creates a Substrate multisig address based on the input address and the required threshold.
 */
export function encodeMultiAddress (who: (HexString | Uint8Array | string)[], threshold: bigint | BN | number, ss58Format?: Prefix): string {
  return encodeAddress(createKeyMulti(who, threshold), ss58Format);
}
