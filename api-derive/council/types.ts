
import type { AccountId, Balance } from 'https://deno.land/x/polkadot@0.2.35/types/interfaces/index.ts';

export interface DeriveCouncilVote {
  stake: Balance;
  votes: AccountId[];
}

export type DeriveCouncilVotes = [AccountId, DeriveCouncilVote][];
