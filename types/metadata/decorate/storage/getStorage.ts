// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from 'https://deno.land/x/polkadot@0.0.3/types-codec/types/index.ts';
import type { StorageEntry } from '../../../primitive/types.ts';
import type { Storage } from '../types.ts';

import { substrate } from './substrate.ts';

/** @internal */
export function getStorage (registry: Registry): Storage {
  const storage: Record<string, StorageEntry> = {};
  const entries = Object.entries(substrate);

  for (let e = 0; e < entries.length; e++) {
    storage[entries[e][0]] = entries[e][1](registry);
  }

  return { substrate: storage };
}
