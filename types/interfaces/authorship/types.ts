// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option } from 'https://deno.land/x/polkadot@0.0.0-7/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot@0.0.0-7/types-codec/types.ts';
import type { AccountId, BlockNumber, Hash } from 'https://deno.land/x/polkadot@0.0.0-7/types/interfaces/runtime.ts';

/** @name UncleEntryItem */
export interface UncleEntryItem extends Enum {
  readonly isInclusionHeight: boolean;
  readonly asInclusionHeight: BlockNumber;
  readonly isUncle: boolean;
  readonly asUncle: ITuple<[Hash, Option<AccountId>]>;
  readonly type: 'InclusionHeight' | 'Uncle';
}

export type PHANTOM_AUTHORSHIP = 'authorship';
