// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { BlockNumber } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';

import { isCompact } from 'https://deno.land/x/polkadot/util/mod.ts';

type CompatHeader = { number: Compact<BlockNumber> | BlockNumber };

export function unwrapBlockNumber (hdr: CompatHeader): BlockNumber {
  return isCompact<BlockNumber>(hdr.number)
    ? hdr.number.unwrap()
    : hdr.number;
}
