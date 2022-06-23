// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec } from 'https://deno.land/x/polkadot@0.0.0-8/types-codec/mod.ts';
import type { CandidateReceipt, ParaId } from 'https://deno.land/x/polkadot@0.0.0-8/types/interfaces/parachains.ts';
import type { AccountId, BlockNumber, H256, Hash } from 'https://deno.land/x/polkadot@0.0.0-8/types/interfaces/runtime.ts';
import type { SessionIndex } from 'https://deno.land/x/polkadot@0.0.0-8/types/interfaces/session.ts';

/** @name BlockAttestations */
export interface BlockAttestations extends Struct {
  readonly receipt: CandidateReceipt;
  readonly valid: Vec<AccountId>;
  readonly invalid: Vec<AccountId>;
}

/** @name IncludedBlocks */
export interface IncludedBlocks extends Struct {
  readonly actualNumber: BlockNumber;
  readonly session: SessionIndex;
  readonly randomSeed: H256;
  readonly activeParachains: Vec<ParaId>;
  readonly paraBlocks: Vec<Hash>;
}

/** @name MoreAttestations */
export interface MoreAttestations extends Struct {}

export type PHANTOM_ATTESTATIONS = 'attestations';
