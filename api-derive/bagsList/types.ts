// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletBagsListListBag, PalletBagsListListNode } from 'https://deno.land/x/polkadot@0.0.2/types/lookup.ts';
import type { BN } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

export interface Bag {
  bag: PalletBagsListListBag | null;
  bagUpper: BN;
  bagLower: BN;
  id: BN;
  index: number;
  key: string;
}

export interface BagExpanded extends Bag {
  nodes: PalletBagsListListNode[];
}
