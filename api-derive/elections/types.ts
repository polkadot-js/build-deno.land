// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { u32 } from 'https://deno.land/x/polkadot@0.0.0-8/types/mod.ts';
import type { AccountId, Balance, BlockNumber, SetIndex, VoteIndex } from 'https://deno.land/x/polkadot@0.0.0-8/types/interfaces.ts';

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
}
