/* eslint-disable */

import type { Struct, u64 } from 'https://deno.land/x/polkadot@0.2.42/types-codec/mod.ts';

/** @name BlockStats */
export interface BlockStats extends Struct {
  readonly witnessLen: u64;
  readonly witnessCompactLen: u64;
  readonly blockLen: u64;
  readonly blockNumExtrinsics: u64;
}

export type PHANTOM_DEV = 'dev';
