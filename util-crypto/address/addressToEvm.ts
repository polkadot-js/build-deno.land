
import type { HexString } from 'https://deno.land/x/polkadot@0.2.37/util/types.ts';

import { decodeAddress } from './decode.ts';

/**
 * @name addressToEvm
 * @summary Converts an SS58 address to its corresponding EVM address.
 */
export function addressToEvm (address: HexString | string | Uint8Array, ignoreChecksum?: boolean): Uint8Array {
  return decodeAddress(address, ignoreChecksum).subarray(0, 20);
}
