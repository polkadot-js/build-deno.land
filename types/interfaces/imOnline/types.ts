// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, Vec, u32 } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { Signature } from 'https://deno.land/x/polkadot/types/interfaces/extrinsics.ts';
import type { BlockNumber } from 'https://deno.land/x/polkadot/types/interfaces/runtime.ts';
import type { SessionIndex } from 'https://deno.land/x/polkadot/types/interfaces/session.ts';

/** @name AuthIndex */
export interface AuthIndex extends u32 {}

/** @name AuthoritySignature */
export interface AuthoritySignature extends Signature {}

/** @name Heartbeat */
export interface Heartbeat extends Struct {
  readonly blockNumber: BlockNumber;
  readonly networkState: OpaqueNetworkState;
  readonly sessionIndex: SessionIndex;
  readonly authorityIndex: AuthIndex;
  readonly validatorsLen: u32;
}

/** @name HeartbeatTo244 */
export interface HeartbeatTo244 extends Struct {
  readonly blockNumber: BlockNumber;
  readonly networkState: OpaqueNetworkState;
  readonly sessionIndex: SessionIndex;
  readonly authorityIndex: AuthIndex;
}

/** @name OpaqueMultiaddr */
export interface OpaqueMultiaddr extends Bytes {}

/** @name OpaqueNetworkState */
export interface OpaqueNetworkState extends Struct {
  readonly peerId: OpaquePeerId;
  readonly externalAddresses: Vec<OpaqueMultiaddr>;
}

/** @name OpaquePeerId */
export interface OpaquePeerId extends Bytes {}

export type PHANTOM_IMONLINE = 'imOnline';