
import type { BN } from 'https://deno.land/x/polkadot@0.2.44/util/mod.ts';
import type { Prefix } from './types.ts';

import { encodeAddress } from './encode.ts';
import { createKeyMulti } from './keyMulti.ts';

/**
 * @name encodeMultiAddress
 * @summary Creates a multisig address.
 * @description
 * Creates a Substrate multisig address based on the input address and the required threshold.
 */
export function encodeMultiAddress (who: (string | Uint8Array)[], threshold: bigint | BN | number, ss58Format?: Prefix): string {
  return encodeAddress(createKeyMulti(who, threshold), ss58Format);
}
