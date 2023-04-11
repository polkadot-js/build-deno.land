/* eslint-disable */

import type { Enum } from 'https://deno.land/x/polkadot@0.2.35/types-codec/mod.ts';

/** @name StatementKind */
export interface StatementKind extends Enum {
  readonly isRegular: boolean;
  readonly isSaft: boolean;
  readonly type: 'Regular' | 'Saft';
}

export type PHANTOM_CLAIMS = 'claims';
