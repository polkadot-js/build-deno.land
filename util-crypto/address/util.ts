
import { decodeAddress } from './decode.ts';

export function addressToU8a (who: string | Uint8Array): Uint8Array {
  return decodeAddress(who);
}
