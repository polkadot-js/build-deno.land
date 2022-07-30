// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum } from 'https://deno.land/x/polkadot@0.0.9/types-codec/mod.ts';

/** @name NpApiError */
export interface NpApiError extends Enum {
  readonly isMemberNotFound: boolean;
  readonly isOverflowInPendingRewards: boolean;
  readonly type: 'MemberNotFound' | 'OverflowInPendingRewards';
}

export type PHANTOM_NOMPOOLS = 'nompools';
