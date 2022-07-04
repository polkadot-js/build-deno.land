// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { GenericVote } from 'https://deno.land/x/polkadot@0.0.3/types/mod.ts';
import type { Compact, Enum, Struct, u32 } from 'https://deno.land/x/polkadot@0.0.3/types-codec/mod.ts';
import type { AccountId, Balance } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/runtime/index.ts';

/** @name ApprovalFlag */
export interface ApprovalFlag extends u32 {}

/** @name DefunctVoter */
export interface DefunctVoter extends Struct {
  readonly who: AccountId;
  readonly voteCount: Compact<u32>;
  readonly candidateCount: Compact<u32>;
}

/** @name Renouncing */
export interface Renouncing extends Enum {
  readonly isMember: boolean;
  readonly isRunnerUp: boolean;
  readonly isCandidate: boolean;
  readonly asCandidate: Compact<u32>;
  readonly type: 'Member' | 'RunnerUp' | 'Candidate';
}

/** @name SetIndex */
export interface SetIndex extends u32 {}

/** @name Vote */
export interface Vote extends GenericVote {}

/** @name VoteIndex */
export interface VoteIndex extends u32 {}

/** @name VoterInfo */
export interface VoterInfo extends Struct {
  readonly lastActive: VoteIndex;
  readonly lastWin: VoteIndex;
  readonly pot: Balance;
  readonly stake: Balance;
}

/** @name VoteThreshold */
export interface VoteThreshold extends Enum {
  readonly isSuperMajorityApprove: boolean;
  readonly isSuperMajorityAgainst: boolean;
  readonly isSimpleMajority: boolean;
  readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
}

export type PHANTOM_ELECTIONS = 'elections';
