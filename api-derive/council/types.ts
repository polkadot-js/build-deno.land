// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Balance } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';

export interface DeriveCouncilVote {
  stake: Balance;
  votes: AccountId[];
}

export type DeriveCouncilVotes = [AccountId, DeriveCouncilVote][];
