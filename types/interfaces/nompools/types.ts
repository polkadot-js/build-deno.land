/* eslint-disable */

import type { Enum, u32 } from 'https://deno.land/x/polkadot/types-codec/mod.ts';

/** @name NpApiError */
export interface NpApiError extends Enum {
  readonly isMemberNotFound: boolean;
  readonly isOverflowInPendingRewards: boolean;
  readonly type: 'MemberNotFound' | 'OverflowInPendingRewards';
}

/** @name NpPoolId */
export interface NpPoolId extends u32 {}

export type PHANTOM_NOMPOOLS = 'nompools';
