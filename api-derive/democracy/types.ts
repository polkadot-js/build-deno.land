
import type { Vec } from 'https://deno.land/x/polkadot@0.2.40/types/mod.ts';
import type { AccountId, Balance, Call, Hash, PropIndex, ReferendumIndex, ReferendumInfoTo239, Vote } from 'https://deno.land/x/polkadot@0.2.40/types/interfaces/index.ts';
import type { PalletDemocracyReferendumStatus, PalletDemocracyVoteThreshold } from 'https://deno.land/x/polkadot@0.2.40/types/lookup.ts';
import type { BN } from 'https://deno.land/x/polkadot@0.2.40/util/mod.ts';
import type { HexString } from 'https://deno.land/x/polkadot@0.2.40/util/types.ts';

export interface AtBlock {
  at: BN;
}

export interface DeriveDemocracyLock {
  balance: Balance;
  isDelegated: boolean;
  isFinished: boolean;
  referendumEnd: BN;
  referendumId: ReferendumIndex;
  unlockAt: BN;
  vote: Vote;
}

export interface DeriveProposalImage extends AtBlock {
  balance: Balance;
  proposal?: Call | undefined;
  proposalHash?: HexString;
  proposalLen?: number;
  proposer: AccountId;
}

export interface DeriveDispatch extends AtBlock {
  index: ReferendumIndex;
  imageHash: HexString;
  image?: DeriveProposalImage | undefined;
}

export interface DeriveProposal {
  balance?: Balance;
  index: PropIndex;
  image?: DeriveProposalImage | undefined;
  imageHash: Hash;
  proposer: AccountId;
  seconds: Vec<AccountId>;
}

export interface DeriveProposalExternal {
  image?: DeriveProposalImage | undefined;
  imageHash: HexString;
  threshold: PalletDemocracyVoteThreshold;
}

export interface DeriveReferendum {
  index: ReferendumIndex;
  image?: DeriveProposalImage | undefined;
  imageHash: HexString;
  status: PalletDemocracyReferendumStatus | ReferendumInfoTo239;
}

export interface DeriveReferendumVote {
  accountId: AccountId;
  balance: Balance;
  isDelegating: boolean;
  vote: Vote;
}

export interface DeriveReferendumVoteState {
  allAye: DeriveReferendumVote[];
  allNay: DeriveReferendumVote[];
  voteCount: number;
  voteCountAye: number;
  voteCountNay: number;
  votedAye: BN;
  votedNay: BN;
  votedTotal: BN;
}

export interface DeriveReferendumVotes extends DeriveReferendumVoteState {
  isPassing: boolean;
  votes: DeriveReferendumVote[];
}

export interface DeriveReferendumExt extends DeriveReferendum, DeriveReferendumVotes {
}
