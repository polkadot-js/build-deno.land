// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { Balance, Weight } from 'https://deno.land/x/polkadot/types/interfaces/runtime/index.ts';
import type { DispatchClass } from 'https://deno.land/x/polkadot/types/interfaces/system/index.ts';

/** @name FeeDetails */
export interface FeeDetails extends Struct {
  readonly inclusionFee: Option<InclusionFee>;
}

/** @name InclusionFee */
export interface InclusionFee extends Struct {
  readonly baseFee: Balance;
  readonly lenFee: Balance;
  readonly adjustedWeightFee: Balance;
}

/** @name RuntimeDispatchInfo */
export interface RuntimeDispatchInfo extends Struct {
  readonly weight: Weight;
  readonly class: DispatchClass;
  readonly partialFee: Balance;
}

export type PHANTOM_PAYMENT = 'payment';
