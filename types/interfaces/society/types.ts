// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, u32 } from 'https://deno.land/x/polkadot@0.0.3/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot@0.0.3/types-codec/types/index.ts';
import type { AccountId, Balance } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/runtime/index.ts';

/** @name Bid */
export interface Bid extends Struct {
  readonly who: AccountId;
  readonly kind: BidKind;
  readonly value: Balance;
}

/** @name BidKind */
export interface BidKind extends Enum {
  readonly isDeposit: boolean;
  readonly asDeposit: Balance;
  readonly isVouch: boolean;
  readonly asVouch: ITuple<[AccountId, Balance]>;
  readonly type: 'Deposit' | 'Vouch';
}

/** @name SocietyJudgement */
export interface SocietyJudgement extends Enum {
  readonly isRebid: boolean;
  readonly isReject: boolean;
  readonly isApprove: boolean;
  readonly type: 'Rebid' | 'Reject' | 'Approve';
}

/** @name SocietyVote */
export interface SocietyVote extends Enum {
  readonly isSkeptic: boolean;
  readonly isReject: boolean;
  readonly isApprove: boolean;
  readonly type: 'Skeptic' | 'Reject' | 'Approve';
}

/** @name StrikeCount */
export interface StrikeCount extends u32 {}

/** @name VouchingStatus */
export interface VouchingStatus extends Enum {
  readonly isVouching: boolean;
  readonly isBanned: boolean;
  readonly type: 'Vouching' | 'Banned';
}

export type PHANTOM_SOCIETY = 'society';
