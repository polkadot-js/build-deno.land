/* eslint-disable */

import type { Bytes, Enum, Struct } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { Balance, Permill } from 'https://deno.land/x/polkadot/types/interfaces/runtime/index.ts';

/** @name AccountStatus */
export interface AccountStatus extends Struct {
  readonly validity: AccountValidity;
  readonly freeBalance: Balance;
  readonly lockedBalance: Balance;
  readonly signature: Bytes;
  readonly vat: Permill;
}

/** @name AccountValidity */
export interface AccountValidity extends Enum {
  readonly isInvalid: boolean;
  readonly isInitiated: boolean;
  readonly isPending: boolean;
  readonly isValidLow: boolean;
  readonly isValidHigh: boolean;
  readonly isCompleted: boolean;
  readonly type: 'Invalid' | 'Initiated' | 'Pending' | 'ValidLow' | 'ValidHigh' | 'Completed';
}

export type PHANTOM_PURCHASE = 'purchase';
