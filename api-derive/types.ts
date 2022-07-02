// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from 'https://deno.land/x/polkadot@0.0.2/api-base/types/index.ts';
import type { u32 } from 'https://deno.land/x/polkadot@0.0.2/types/mod.ts';
import type { Balance, BlockNumber, BountyIndex, Hash, Proposal, ProposalIndex, SetIndex, Votes } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { PalletBountiesBounty, PalletTreasuryProposal } from 'https://deno.land/x/polkadot@0.0.2/types/lookup.ts';
import type { BN } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import type { ExactDerive } from './derive.ts';

export * from './accounts/types.ts';
export * from './balances/types.ts';
export * from './bagsList/types.ts';
export * from './council/types.ts';
export * from './crowdloan/types.ts';
export * from './democracy/types.ts';
export * from './elections/types.ts';
export * from './parachains/types.ts';
export * from './session/types.ts';
export * from './society/types.ts';
export * from './staking/types.ts';
export * from './type/types.ts';

export interface DeriveApi extends ApiInterfaceRx {
  derive: ExactDerive;
}

export interface DeriveContractFees {
  callBaseFee: BN;
  contractFee: BN;
  creationFee: BN;
  rentByteFee: BN;
  rentDepositOffset: BN;
  surchargeReward: BN;
  tombstoneDeposit: BN;
  transactionBaseFee: BN;
  transactionByteFee: BN;
  transferFee: BN;
}

export interface DeriveCollectiveProposal {
  hash: Hash;
  proposal: Proposal | null;
  votes: Votes | null;
}

export interface DeriveFees {
  creationFee: Balance;
  existentialDeposit: Balance;
  transactionBaseFee: Balance;
  transactionByteFee: Balance;
  transferFee: Balance;
}

export interface DeriveHeartbeatAuthor {
  blockCount: u32;
  hasMessage: boolean;
  isOnline: boolean;
}

export type DeriveHeartbeats = Record<string, DeriveHeartbeatAuthor>;

export interface RecentlyOffline {
  blockNumber: BlockNumber;
  count: BN;
}

export type DeriveRecentlyOffline = Record<string, RecentlyOffline[]>;

export interface DeriveTreasuryProposal {
  council: DeriveCollectiveProposal[];
  id: ProposalIndex;
  proposal: PalletTreasuryProposal;
}

export interface DeriveTreasuryProposals {
  approvals: DeriveTreasuryProposal[];
  proposalCount: ProposalIndex;
  proposals: DeriveTreasuryProposal[];
}

export interface VoterPosition {
  globalIndex: BN;
  index: BN;
  setIndex: SetIndex;
}

export type DeriveVoterPositions = Record<string, VoterPosition>;

export interface DeriveBounty {
  bounty: PalletBountiesBounty;
  description: string;
  index: BountyIndex;
  proposals: DeriveCollectiveProposal[];
}

export type DeriveBounties = DeriveBounty[];
