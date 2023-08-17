
import { decodeAddress } from './decode.ts';

/**
 * @name addressToEvm
 * @summary Converts an SS58 address to its corresponding EVM address.
 */
export function addressToEvm (address: string | Uint8Array, ignoreChecksum?: boolean): Uint8Array {
  return decodeAddress(address, ignoreChecksum).subarray(0, 20);
}
