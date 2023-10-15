/* eslint-disable */

import type { Enum } from 'https://deno.land/x/polkadot@0.2.43/types-codec/mod.ts';

/** @name StorageKind */
export interface StorageKind extends Enum {
  readonly isPersistent: boolean;
  readonly isLocal: boolean;
  readonly type: 'Persistent' | 'Local';
}

export type PHANTOM_OFFCHAIN = 'offchain';
