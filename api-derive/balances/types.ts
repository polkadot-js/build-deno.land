// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Balance, BalanceLockTo212, Index } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { PalletBalancesBalanceLock, PalletBalancesReserveData } from 'https://deno.land/x/polkadot@0.0.2/types/lookup.ts';
import type { BN } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

export interface DeriveBalancesAccountData {
  freeBalance: Balance;
  frozenFee: Balance;
  frozenMisc: Balance;
  reservedBalance: Balance;
  votingBalance: Balance;
}

export interface DeriveBalancesAccount extends DeriveBalancesAccountData {
  accountId: AccountId;
  accountNonce: Index;
  additional: DeriveBalancesAccountData[];
}

export interface DeriveBalancesAllAccountData extends DeriveBalancesAccountData {
  availableBalance: Balance;
  lockedBalance: Balance;
  lockedBreakdown: (PalletBalancesBalanceLock | BalanceLockTo212)[];
  vestingLocked: Balance;
}

export interface DeriveBalancesVesting {
  startingBlock: BN;
  endBlock: BN;
  perBlock: BN;
  locked: BN;
  vested: BN;
}

export interface DeriveBalancesAllVesting {
  isVesting: boolean;
  vestedBalance: BN;
  vestedClaimable: BN;
  vesting: DeriveBalancesVesting[];
  vestingTotal: BN;
}

export interface DeriveBalancesAll extends DeriveBalancesAccount, DeriveBalancesAllAccountData, DeriveBalancesAllVesting {
  additional: DeriveBalancesAllAccountData[];
  namedReserves: PalletBalancesReserveData[][];
}

export type DeriveBalancesMap = Record<string, DeriveBalancesAll>;
