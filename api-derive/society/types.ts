
import type { u32 } from 'https://deno.land/x/polkadot@0.2.36/types/mod.ts';
import type { AccountId, Balance, BalanceOf, BlockNumber, StrikeCount } from 'https://deno.land/x/polkadot@0.2.36/types/interfaces/index.ts';
import type { PalletSocietyBid, PalletSocietyBidKind, PalletSocietyVote, PalletSocietyVouchingStatus } from 'https://deno.land/x/polkadot@0.2.36/types/lookup.ts';

export interface DeriveSociety {
  bids: PalletSocietyBid[];
  defender?: AccountId | undefined;
  hasDefender: boolean;
  head?: AccountId | undefined;
  founder?: AccountId | undefined;
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
  vote?: PalletSocietyVote | undefined;
  vouching?: PalletSocietyVouchingStatus | undefined;
}
