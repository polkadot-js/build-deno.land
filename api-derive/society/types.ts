// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { u32 } from 'https://deno.land/x/polkadot@0.0.3/types/mod.ts';
import type { AccountId, Balance, BalanceOf, BlockNumber, StrikeCount } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { PalletSocietyBid, PalletSocietyBidKind, PalletSocietyVote, PalletSocietyVouchingStatus } from 'https://deno.land/x/polkadot@0.0.3/types/lookup.ts';

export interface DeriveSociety {
  bids: PalletSocietyBid[];
  defender?: AccountId;
  hasDefender: boolean;
  head?: AccountId;
  founder?: AccountId;
  maxMembers: u32;
  pot: BalanceOf;
}

export interface DeriveSocietyCandidate {
  accountId: AccountId;
  kind: PalletSocietyBidKind;
  value: Balance;
  isSuspended: boolean;
}

export interface DeriveSocietyMember {
  accountId: AccountId;
  isDefenderVoter: boolean;
  isSuspended: boolean;
  payouts: [BlockNumber, Balance][];
  strikes: StrikeCount;
  vote?: PalletSocietyVote;
  vouching?: PalletSocietyVouchingStatus;
}
