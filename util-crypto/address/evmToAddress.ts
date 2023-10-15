
import type { HashType } from '../secp256k1/types.ts';
import type { Prefix } from './types.ts';

import { u8aConcat } from 'https://deno.land/x/polkadot@0.2.43/util/mod.ts';

import { hasher } from '../secp256k1/hasher.ts';
import { encodeAddress } from './encode.ts';

/**
 * @name evmToAddress
 * @summary Converts an EVM address to its corresponding SS58 address.
 */
export function evmToAddress (evmAddress: string | Uint8Array, ss58Format?: Prefix, hashType: HashType = 'blake2'): string {
  const message = u8aConcat('evm:', evmAddress);

  if (message.length !== 24) {
    throw new Error(`Converting ${evmAddress as string}: Invalid evm address length`);
  }

  return encodeAddress(hasher(hashType, message), ss58Format);
}
