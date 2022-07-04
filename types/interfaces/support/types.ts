// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, bool, u8 } from 'https://deno.land/x/polkadot@0.0.3/types-codec/mod.ts';
import type { Balance, Perbill } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/runtime/index.ts';

/** @name WeightToFeeCoefficient */
export interface WeightToFeeCoefficient extends Struct {
  readonly coeffInteger: Balance;
  readonly coeffFrac: Perbill;
  readonly negative: bool;
  readonly degree: u8;
}

export type PHANTOM_SUPPORT = 'support';
