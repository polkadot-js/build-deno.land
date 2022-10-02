// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Option, Struct, U8aFixed, Vec, u32, u64 } from 'https://deno.land/x/polkadot@0.2.9/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot@0.2.9/types-codec/types/index.ts';
import type { AuthorityId } from 'https://deno.land/x/polkadot@0.2.9/types/interfaces/consensus/index.ts';
import type { EcdsaSignature } from 'https://deno.land/x/polkadot@0.2.9/types/interfaces/extrinsics/index.ts';
import type { BlockNumber, H256 } from 'https://deno.land/x/polkadot@0.2.9/types/interfaces/runtime/index.ts';

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
