// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct, U8aFixed, Vec, u32, u64 } from 'https://deno.land/x/polkadot@0.0.4-5/types-codec/mod.ts';
import type { HeadData, OutboundHrmpMessage, RelayBlockNumber, UpwardMessage, ValidationCode } from 'https://deno.land/x/polkadot@0.0.4-5/types/interfaces/parachains/index.ts';
import type { Weight } from 'https://deno.land/x/polkadot@0.0.4-5/types/interfaces/runtime/index.ts';

/** @name CollationInfo */
export interface CollationInfo extends Struct {
  readonly upwardMessages: Vec<UpwardMessage>;
  readonly horizontalMessages: Vec<OutboundHrmpMessage>;
  readonly newValidationCode: Option<ValidationCode>;
  readonly processedDownwardMessages: u32;
  readonly hrmpWatermark: RelayBlockNumber;
  readonly headData: HeadData;
}

/** @name CollationInfoV1 */
export interface CollationInfoV1 extends Struct {
  readonly upwardMessages: Vec<UpwardMessage>;
  readonly horizontalMessages: Vec<OutboundHrmpMessage>;
  readonly newValidationCode: Option<ValidationCode>;
  readonly processedDownwardMessages: u32;
  readonly hrmpWatermark: RelayBlockNumber;
}

/** @name ConfigData */
export interface ConfigData extends Struct {
  readonly maxIndividual: Weight;
}

/** @name MessageId */
export interface MessageId extends U8aFixed {}

/** @name OverweightIndex */
export interface OverweightIndex extends u64 {}

/** @name PageCounter */
export interface PageCounter extends u32 {}

/** @name PageIndexData */
export interface PageIndexData extends Struct {
  readonly beginUsed: PageCounter;
  readonly endUsed: PageCounter;
  readonly overweightCount: OverweightIndex;
}

export type PHANTOM_CUMULUS = 'cumulus';
