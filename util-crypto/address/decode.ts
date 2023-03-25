
import type { HexString } from 'https://deno.land/x/polkadot@0.2.33/util/types.ts';
import type { Prefix } from './types.ts';

import { isHex, isU8a, u8aToU8a } from 'https://deno.land/x/polkadot@0.2.33/util/mod.ts';

import { base58Decode } from '../base58/index.ts';
import { checkAddressChecksum } from './checksum.ts';
import { defaults } from './defaults.ts';

export function decodeAddress (encoded?: HexString | string | Uint8Array | null, ignoreChecksum?: boolean, ss58Format: Prefix = -1): Uint8Array {
  if (!encoded) {
    throw new Error('Invalid empty address passed');
  }

  if (isU8a(encoded) || isHex(encoded)) {
    return u8aToU8a(encoded);
  }

  try {
    const decoded = base58Decode(encoded);

    if (!defaults.allowedEncodedLengths.includes(decoded.length)) {
      throw new Error('Invalid decoded address length');
    }

    const [isValid, endPos, ss58Length, ss58Decoded] = checkAddressChecksum(decoded);

    if (!isValid && !ignoreChecksum) {
      throw new Error('Invalid decoded address checksum');
    } else if (ss58Format !== -1 && ss58Format !== ss58Decoded) {
      throw new Error(`Expected ss58Format ${ss58Format}, received ${ss58Decoded}`);
    }

    return decoded.slice(ss58Length, endPos);
  } catch (error) {
    throw new Error(`Decoding ${encoded}: ${(error as Error).message}`);
  }
}
