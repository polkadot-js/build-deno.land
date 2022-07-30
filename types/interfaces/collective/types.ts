// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, Vec, u32 } from 'https://deno.land/x/polkadot@0.0.9/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot@0.0.9/types-codec/types/index.ts';
import type { AccountId, BlockNumber } from 'https://deno.land/x/polkadot@0.0.9/types/interfaces/runtime/index.ts';

/** @name CollectiveOrigin */
export interface CollectiveOrigin extends Enum {
  readonly isMembers: boolean;
  readonly asMembers: ITuple<[MemberCount, MemberCount]>;
  readonly isMember: boolean;
  readonly asMember: AccountId;
  readonly type: 'Members' | 'Member';
}

/** @name MemberCount */
export interface MemberCount extends u32 {}

/** @name ProposalIndex */
export interface ProposalIndex extends u32 {}

/** @name Votes */
export interface Votes extends Struct {
  readonly index: ProposalIndex;
  readonly threshold: MemberCount;
  readonly ayes: Vec<AccountId>;
  readonly nays: Vec<AccountId>;
  readonly end: BlockNumber;
}

/** @name VotesTo230 */
export interface VotesTo230 extends Struct {
  readonly index: ProposalIndex;
  readonly threshold: MemberCount;
  readonly ayes: Vec<AccountId>;
  readonly nays: Vec<AccountId>;
}

export type PHANTOM_COLLECTIVE = 'collective';
