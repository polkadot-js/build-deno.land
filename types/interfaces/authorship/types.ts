/* eslint-disable */

import type { Enum, Option } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { AccountId, BlockNumber, Hash } from 'https://deno.land/x/polkadot/types/interfaces/runtime/index.ts';

/** @name UncleEntryItem */
export interface UncleEntryItem extends Enum {
  readonly isInclusionHeight: boolean;
  readonly asInclusionHeight: BlockNumber;
  readonly isUncle: boolean;
  readonly asUncle: ITuple<[Hash, Option<AccountId>]>;
  readonly type: 'InclusionHeight' | 'Uncle';
}

export type PHANTOM_AUTHORSHIP = 'authorship';
