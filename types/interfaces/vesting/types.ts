/* eslint-disable */

import type { Struct } from 'https://deno.land/x/polkadot@0.2.42/types-codec/mod.ts';
import type { Balance, BlockNumber } from 'https://deno.land/x/polkadot@0.2.42/types/interfaces/runtime/index.ts';

/** @name VestingInfo */
export interface VestingInfo extends Struct {
  readonly locked: Balance;
  readonly perBlock: Balance;
  readonly startingBlock: BlockNumber;
}

export type PHANTOM_VESTING = 'vesting';
