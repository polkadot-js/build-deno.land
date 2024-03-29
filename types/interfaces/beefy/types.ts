/* eslint-disable */

import type { Bytes, Enum, Option, Struct, U8aFixed, Vec, u32, u64 } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { AuthorityId } from 'https://deno.land/x/polkadot/types/interfaces/consensus/index.ts';
import type { EcdsaSignature, Signature } from 'https://deno.land/x/polkadot/types/interfaces/extrinsics/index.ts';
import type { BlockNumber, H256 } from 'https://deno.land/x/polkadot/types/interfaces/runtime/index.ts';

/** @name BeefyAuthoritySet */
export interface BeefyAuthoritySet extends Struct {
  readonly id: u64;
  readonly len: u32;
  readonly root: H256;
}

/** @name BeefyCommitment */
export interface BeefyCommitment extends Struct {
  readonly payload: BeefyPayload;
  readonly blockNumber: BlockNumber;
  readonly validatorSetId: ValidatorSetId;
}

/** @name BeefyCompactSignedCommitment */
export interface BeefyCompactSignedCommitment extends Struct {
  readonly commitment: BeefyCommitment;
  readonly signaturesFrom: Bytes;
  readonly validatorSetLen: u32;
  readonly signaturesCompact: Vec<EcdsaSignature>;
}

/** @name BeefyEquivocationProof */
export interface BeefyEquivocationProof extends Struct {
  readonly first: BeefyVoteMessage;
  readonly second: BeefyVoteMessage;
}

/** @name BeefyId */
export interface BeefyId extends U8aFixed {}

/** @name BeefyNextAuthoritySet */
export interface BeefyNextAuthoritySet extends Struct {
  readonly id: u64;
  readonly len: u32;
  readonly root: H256;
}

/** @name BeefyPayload */
export interface BeefyPayload extends Vec<ITuple<[BeefyPayloadId, Bytes]>> {}

/** @name BeefyPayloadId */
export interface BeefyPayloadId extends U8aFixed {}

/** @name BeefySignedCommitment */
export interface BeefySignedCommitment extends Struct {
  readonly commitment: BeefyCommitment;
  readonly signatures: Vec<Option<EcdsaSignature>>;
}

/** @name BeefyVersionedFinalityProof */
export interface BeefyVersionedFinalityProof extends Enum {
  readonly isV0: boolean;
  readonly isV1: boolean;
  readonly asV1: BeefyCompactSignedCommitment;
  readonly type: 'V0' | 'V1';
}

/** @name BeefyVoteMessage */
export interface BeefyVoteMessage extends Struct {
  readonly commitment: BeefyCommitment;
  readonly id: AuthorityId;
  readonly signature: Signature;
}

/** @name MmrRootHash */
export interface MmrRootHash extends H256 {}

/** @name ValidatorSet */
export interface ValidatorSet extends Struct {
  readonly validators: Vec<AuthorityId>;
  readonly id: ValidatorSetId;
}

/** @name ValidatorSetId */
export interface ValidatorSetId extends u64 {}

export type PHANTOM_BEEFY = 'beefy';
