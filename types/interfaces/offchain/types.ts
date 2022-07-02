// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum } from 'https://deno.land/x/polkadot@0.0.2/types-codec/mod.ts';

/** @name StorageKind */
export interface StorageKind extends Enum {
  readonly isPersistent: boolean;
  readonly isLocal: boolean;
  readonly type: 'Persistent' | 'Local';
}

export type PHANTOM_OFFCHAIN = 'offchain';
