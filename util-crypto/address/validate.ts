
import type { HexString } from 'https://deno.land/x/polkadot@0.2.40/util/types.ts';
import type { Prefix } from './types.ts';

import { decodeAddress } from './decode.ts';

export function validateAddress (encoded?: HexString | string | null, ignoreChecksum?: boolean, ss58Format?: Prefix): encoded is string {
  return !!decodeAddress(encoded, ignoreChecksum, ss58Format);
}
