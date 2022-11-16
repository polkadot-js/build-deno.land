// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option, u32, u64 } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { BlockNumber, EraIndex, Moment, SessionIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';

export interface DeriveSessionIndexes {
  activeEra: EraIndex;
  activeEraStart: Option<Moment>;
  currentEra: EraIndex;
  currentIndex: SessionIndex;
  validatorCount: u32;
}

export interface DeriveSessionInfo extends DeriveSessionIndexes {
  eraLength: BlockNumber;
  isEpoch: boolean;
  sessionLength: u64;
  sessionsPerEra: SessionIndex;
}

export interface DeriveSessionProgress extends DeriveSessionInfo {
  eraProgress: BlockNumber;
  sessionProgress: BlockNumber;
}
