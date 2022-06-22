// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct } from 'https://deno.land/x/polkadot@0.0.0-7/types-codec/mod.ts';
import type { Balance, BlockNumber } from 'https://deno.land/x/polkadot@0.0.0-7/types/interfaces/runtime.ts';

/** @name VestingInfo */
export interface VestingInfo extends Struct {
  readonly locked: Balance;
  readonly perBlock: Balance;
  readonly startingBlock: BlockNumber;
}

export type PHANTOM_VESTING = 'vesting';
