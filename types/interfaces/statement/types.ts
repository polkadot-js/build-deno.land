/* eslint-disable */

import type { Enum, Struct, u32 } from 'https://deno.land/x/polkadot/types-codec/mod.ts';

/** @name StatementStoreInvalidStatement */
export interface StatementStoreInvalidStatement extends Enum {
  readonly isBadProof: boolean;
  readonly isNoProof: boolean;
  readonly isInternalError: boolean;
  readonly type: 'BadProof' | 'NoProof' | 'InternalError';
}

/** @name StatementStoreStatementSource */
export interface StatementStoreStatementSource extends Enum {
  readonly isChain: boolean;
  readonly isNetwork: boolean;
  readonly isLocal: boolean;
  readonly type: 'Chain' | 'Network' | 'Local';
}

/** @name StatementStoreValidStatement */
export interface StatementStoreValidStatement extends Struct {
  readonly maxCount: u32;
  readonly maxSize: u32;
}

export type PHANTOM_STATEMENT = 'statement';
