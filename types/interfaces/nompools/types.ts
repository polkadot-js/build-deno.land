/* eslint-disable */

import type { Enum } from 'https://deno.land/x/polkadot@0.2.27/types-codec/mod.ts';

/** @name NpApiError */
export interface NpApiError extends Enum {
  readonly isMemberNotFound: boolean;
  readonly isOverflowInPendingRewards: boolean;
  readonly type: 'MemberNotFound' | 'OverflowInPendingRewards';
}

export type PHANTOM_NOMPOOLS = 'nompools';
