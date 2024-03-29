
import type { u32 } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { AccountId, Balance, BlockNumber, SetIndex, VoteIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';

export interface DeriveElectionsInfo {
  candidates: AccountId[];
  candidateCount: u32;
  candidacyBond?: Balance;
  desiredRunnersUp?: u32;
  desiredSeats?: u32;
  members: [AccountId, Balance][];
  nextVoterSet?: SetIndex;
  runnersUp: [AccountId, Balance][];
  termDuration?: BlockNumber;
  voteCount?: VoteIndex;
  voterCount?: SetIndex;
  votingBond?: Balance;
  votingBondBase?: Balance;
  votingBondFactor?: Balance;
}
