
import type { Prefix } from './types.ts';

import { decodeAddress } from './decode.ts';

export function validateAddress (encoded?: string | null, ignoreChecksum?: boolean, ss58Format?: Prefix): encoded is string {
  return !!decodeAddress(encoded, ignoreChecksum, ss58Format);
}
