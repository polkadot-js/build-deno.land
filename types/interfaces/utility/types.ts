// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec, u32 } from 'https://deno.land/x/polkadot@0.0.2/types-codec/mod.ts';
import type { AccountId, Balance, BlockNumber } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/runtime/index.ts';

/** @name Multisig */
export interface Multisig extends Struct {
  readonly when: Timepoint;
  readonly deposit: Balance;
  readonly depositor: AccountId;
  readonly approvals: Vec<AccountId>;
}

/** @name Timepoint */
export interface Timepoint extends Struct {
  readonly height: BlockNumber;
  readonly index: u32;
}

export type PHANTOM_UTILITY = 'utility';
