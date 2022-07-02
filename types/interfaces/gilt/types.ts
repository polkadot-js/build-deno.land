// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u32 } from 'https://deno.land/x/polkadot@0.0.2/types-codec/mod.ts';
import type { AccountId, Balance, BlockNumber, Perquintill } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/runtime/index.ts';

/** @name ActiveGilt */
export interface ActiveGilt extends Struct {
  readonly proportion: Perquintill;
  readonly amount: Balance;
  readonly who: AccountId;
  readonly expiry: BlockNumber;
}

/** @name ActiveGiltsTotal */
export interface ActiveGiltsTotal extends Struct {
  readonly frozen: Balance;
  readonly proportion: Perquintill;
  readonly index: ActiveIndex;
  readonly target: Perquintill;
}

/** @name ActiveIndex */
export interface ActiveIndex extends u32 {}

/** @name GiltBid */
export interface GiltBid extends Struct {
  readonly amount: Balance;
  readonly who: AccountId;
}

export type PHANTOM_GILT = 'gilt';
