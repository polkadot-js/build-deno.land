// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct } from 'https://deno.land/x/polkadot@0.0.0-5/types-codec/mod.ts';
import type { BlockHash } from 'https://deno.land/x/polkadot@0.0.0-5/types/interfaces/chain.ts';

/** @name MmrLeafBatchProof */
export interface MmrLeafBatchProof extends Struct {
  readonly blockHash: BlockHash;
  readonly leaves: Bytes;
  readonly proof: Bytes;
}

/** @name MmrLeafProof */
export interface MmrLeafProof extends Struct {
  readonly blockHash: BlockHash;
  readonly leaf: Bytes;
  readonly proof: Bytes;
}

export type PHANTOM_MMR = 'mmr';
