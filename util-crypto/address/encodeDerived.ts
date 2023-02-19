
import type { BN } from 'https://deno.land/x/polkadot@0.2.28/util/mod.ts';
import type { HexString } from 'https://deno.land/x/polkadot@0.2.28/util/types.ts';
import type { Prefix } from './types.ts';

import { decodeAddress } from './decode.ts';
import { encodeAddress } from './encode.ts';
import { createKeyDerived } from './keyDerived.ts';

/**
 * @name encodeDerivedAddress
 * @summary Creates a derived address as used in Substrate utility.
 * @description
 * Creates a Substrate derived address based on the input address/publicKey and the index supplied.
 */
export function encodeDerivedAddress (who: HexString | Uint8Array | string, index: bigint | BN | number, ss58Format?: Prefix): string {
  return encodeAddress(createKeyDerived(decodeAddress(who), index), ss58Format);
}
