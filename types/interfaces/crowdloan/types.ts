// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option, Struct, u32 } from 'https://deno.land/x/polkadot@0.0.2/types-codec/mod.ts';
import type { LeasePeriod } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/parachains/index.ts';
import type { AccountId, Balance, BlockNumber, MultiSigner } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/runtime/index.ts';

/** @name FundIndex */
export interface FundIndex extends u32 {}

/** @name FundInfo */
export interface FundInfo extends Struct {
  readonly depositor: AccountId;
  readonly verifier: Option<MultiSigner>;
  readonly deposit: Balance;
  readonly raised: Balance;
  readonly end: BlockNumber;
  readonly cap: Balance;
  readonly lastContribution: LastContribution;
  readonly firstPeriod: LeasePeriod;
  readonly lastPeriod: LeasePeriod;
  readonly trieIndex: TrieIndex;
}

/** @name LastContribution */
export interface LastContribution extends Enum {
  readonly isNever: boolean;
  readonly isPreEnding: boolean;
  readonly asPreEnding: u32;
  readonly isEnding: boolean;
  readonly asEnding: BlockNumber;
  readonly type: 'Never' | 'PreEnding' | 'Ending';
}

/** @name TrieIndex */
export interface TrieIndex extends u32 {}

export type PHANTOM_CROWDLOAN = 'crowdloan';
