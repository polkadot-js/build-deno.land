/* eslint-disable */

import type { Struct, u64 } from 'https://deno.land/x/polkadot/types-codec/mod.ts';

/** @name RawAuraPreDigest */
export interface RawAuraPreDigest extends Struct {
  readonly slotNumber: u64;
}

export type PHANTOM_AURA = 'aura';
