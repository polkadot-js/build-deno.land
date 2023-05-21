
import type { Registry } from 'https://deno.land/x/polkadot@0.2.40/types-codec/types/index.ts';
import type { StorageEntry } from '../../../primitive/types.ts';
import type { Storage } from '../types.ts';

import { substrate } from './substrate.ts';

/** @internal */
export function getStorage (registry: Registry): Storage {
  const storage: Record<string, StorageEntry> = {};
  const entries = Object.entries(substrate);

  for (let e = 0, count = entries.length; e < count; e++) {
    storage[entries[e][0]] = entries[e][1](registry);
  }

  return { substrate: storage };
}
