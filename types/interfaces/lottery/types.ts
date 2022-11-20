// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, bool, u8 } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { Balance, BlockNumber } from 'https://deno.land/x/polkadot/types/interfaces/runtime/index.ts';

/** @name CallIndex */
export interface CallIndex extends ITuple<[u8, u8]> {}

/** @name LotteryConfig */
export interface LotteryConfig extends Struct {
  readonly price: Balance;
  readonly start: BlockNumber;
  readonly length: BlockNumber;
  readonly delay: BlockNumber;
  readonly repeat: bool;
}

export type PHANTOM_LOTTERY = 'lottery';
