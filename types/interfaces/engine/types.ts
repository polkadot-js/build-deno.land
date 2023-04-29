/* eslint-disable */

import type { Struct, bool } from 'https://deno.land/x/polkadot@0.2.37/types-codec/mod.ts';
import type { BlockHash } from 'https://deno.land/x/polkadot@0.2.37/types/interfaces/chain/index.ts';

/** @name CreatedBlock */
export interface CreatedBlock extends Struct {
  readonly blockHash: BlockHash;
  readonly aux: ImportedAux;
}

/** @name ImportedAux */
export interface ImportedAux extends Struct {
  readonly headerOnly: bool;
  readonly clearJustificationRequests: bool;
  readonly needsJustification: bool;
  readonly badJustification: bool;
  readonly needsFinalityProof: bool;
  readonly isNewBest: bool;
}

export type PHANTOM_ENGINE = 'engine';
