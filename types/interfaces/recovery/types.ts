// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec, u16 } from 'https://deno.land/x/polkadot@0.0.2/types-codec/mod.ts';
import type { AccountId, Balance, BlockNumber } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/runtime/index.ts';

/** @name ActiveRecovery */
export interface ActiveRecovery extends Struct {
  readonly created: BlockNumber;
  readonly deposit: Balance;
  readonly friends: Vec<AccountId>;
}

/** @name RecoveryConfig */
export interface RecoveryConfig extends Struct {
  readonly delayPeriod: BlockNumber;
  readonly deposit: Balance;
  readonly friends: Vec<AccountId>;
  readonly threshold: u16;
}

export type PHANTOM_RECOVERY = 'recovery';
