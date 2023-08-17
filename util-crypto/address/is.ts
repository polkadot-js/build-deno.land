
import type { Prefix } from './types.ts';

import { validateAddress } from './validate.ts';

export function isAddress (address?: string | null, ignoreChecksum?: boolean, ss58Format?: Prefix): address is string {
  try {
    return validateAddress(address, ignoreChecksum, ss58Format);
  } catch {
    return false;
  }
}
