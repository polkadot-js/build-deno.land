
import type { PalletBagsListListBag, PalletBagsListListNode } from 'https://deno.land/x/polkadot@0.2.45/types/lookup.ts';
import type { BN } from 'https://deno.land/x/polkadot@0.2.45/util/mod.ts';

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
