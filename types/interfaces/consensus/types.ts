/* eslint-disable */

import type { U8aFixed } from 'https://deno.land/x/polkadot@0.2.32/types-codec/mod.ts';
import type { AccountId } from 'https://deno.land/x/polkadot@0.2.32/types/interfaces/runtime/index.ts';

/** @name AuthorityId */
export interface AuthorityId extends AccountId {}

/** @name RawVRFOutput */
export interface RawVRFOutput extends U8aFixed {}

export type PHANTOM_CONSENSUS = 'consensus';
