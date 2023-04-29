
import type { Option, u32, u64 } from 'https://deno.land/x/polkadot@0.2.37/types/mod.ts';
import type { BlockNumber, EraIndex, Moment, SessionIndex } from 'https://deno.land/x/polkadot@0.2.37/types/interfaces/index.ts';

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
