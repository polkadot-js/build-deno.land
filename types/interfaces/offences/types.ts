// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, U8aFixed, Vec } from 'https://deno.land/x/polkadot@0.0.2/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot@0.0.2/types-codec/types/index.ts';
import type { AccountId, Hash, Perbill } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/runtime/index.ts';
import type { IdentificationTuple, SessionIndex } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/session/index.ts';

/** @name DeferredOffenceOf */
export interface DeferredOffenceOf extends ITuple<[Vec<OffenceDetails>, Vec<Perbill>, SessionIndex]> {}

/** @name Kind */
export interface Kind extends U8aFixed {}

/** @name OffenceDetails */
export interface OffenceDetails extends Struct {
  readonly offender: Offender;
  readonly reporters: Vec<Reporter>;
}

/** @name Offender */
export interface Offender extends IdentificationTuple {}

/** @name OpaqueTimeSlot */
export interface OpaqueTimeSlot extends Bytes {}

/** @name Reporter */
export interface Reporter extends AccountId {}

/** @name ReportIdOf */
export interface ReportIdOf extends Hash {}

export type PHANTOM_OFFENCES = 'offences';
