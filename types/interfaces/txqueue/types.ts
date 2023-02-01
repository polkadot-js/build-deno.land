// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Result, Struct, Vec, bool } from 'https://deno.land/x/polkadot@0.2.25/types-codec/mod.ts';
import type { TransactionLongevity, TransactionPriority, TransactionTag } from 'https://deno.land/x/polkadot@0.2.25/types/interfaces/runtime/index.ts';
import type { TransactionValidityError } from 'https://deno.land/x/polkadot@0.2.25/types/interfaces/system/index.ts';

/** @name TransactionSource */
export interface TransactionSource extends Enum {
  readonly isInBlock: boolean;
  readonly isLocal: boolean;
  readonly isExternal: boolean;
  readonly type: 'InBlock' | 'Local' | 'External';
}

/** @name TransactionValidity */
export interface TransactionValidity extends Result<ValidTransaction, TransactionValidityError> {
  readonly isErr: boolean;
  readonly asErr: TransactionValidityError;
  readonly isOk: boolean;
  readonly asOk: ValidTransaction;
}

/** @name ValidTransaction */
export interface ValidTransaction extends Struct {
  readonly priority: TransactionPriority;
  readonly requires: Vec<TransactionTag>;
  readonly provides: Vec<TransactionTag>;
  readonly longevity: TransactionLongevity;
  readonly propagate: bool;
}

export type PHANTOM_TXQUEUE = 'txqueue';
