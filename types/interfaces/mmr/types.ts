/* eslint-disable */

import type { Bytes, Enum, Struct, Vec, u64 } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { BlockHash } from 'https://deno.land/x/polkadot/types/interfaces/chain/index.ts';
import type { Hash } from 'https://deno.land/x/polkadot/types/interfaces/runtime/index.ts';

/** @name MmrBatchProof */
export interface MmrBatchProof extends Struct {
  readonly leafIndices: Vec<MmrLeafIndex>;
  readonly leafCount: MmrNodeIndex;
  readonly items: Vec<Hash>;
}

/** @name MmrEncodableOpaqueLeaf */
export interface MmrEncodableOpaqueLeaf extends Bytes {}

/** @name MmrError */
export interface MmrError extends Enum {
  readonly isInvalidNumericOp: boolean;
  readonly isPush: boolean;
  readonly isGetRoot: boolean;
  readonly isCommit: boolean;
  readonly isGenerateProof: boolean;
  readonly isVerify: boolean;
  readonly isLeafNotFound: boolean;
  readonly isPalletNotIncluded: boolean;
  readonly isInvalidLeafIndex: boolean;
  readonly isInvalidBestKnownBlock: boolean;
  readonly type: 'InvalidNumericOp' | 'Push' | 'GetRoot' | 'Commit' | 'GenerateProof' | 'Verify' | 'LeafNotFound' | 'PalletNotIncluded' | 'InvalidLeafIndex' | 'InvalidBestKnownBlock';
}

/** @name MmrHash */
export interface MmrHash extends Hash {}

/** @name MmrLeafBatchProof */
export interface MmrLeafBatchProof extends Struct {
  readonly blockHash: BlockHash;
  readonly leaves: Bytes;
  readonly proof: Bytes;
}

/** @name MmrLeafIndex */
export interface MmrLeafIndex extends u64 {}

/** @name MmrLeafProof */
export interface MmrLeafProof extends Struct {
  readonly blockHash: BlockHash;
  readonly leaf: Bytes;
  readonly proof: Bytes;
}

/** @name MmrNodeIndex */
export interface MmrNodeIndex extends u64 {}

/** @name MmrProof */
export interface MmrProof extends Struct {
  readonly leafIndex: MmrLeafIndex;
  readonly leafCount: MmrNodeIndex;
  readonly items: Vec<Hash>;
}

export type PHANTOM_MMR = 'mmr';
