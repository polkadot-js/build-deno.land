// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Struct, U8aFixed, bool } from 'https://deno.land/x/polkadot@0.0.7/types-codec/mod.ts';

/** @name CheckInherentsResult */
export interface CheckInherentsResult extends Struct {
  readonly okay: bool;
  readonly fatalError: bool;
  readonly errors: InherentData;
}

/** @name InherentData */
export interface InherentData extends Struct {
  readonly data: BTreeMap<InherentIdentifier, Bytes>;
}

/** @name InherentIdentifier */
export interface InherentIdentifier extends U8aFixed {}

export type PHANTOM_BLOCKBUILDER = 'blockbuilder';
