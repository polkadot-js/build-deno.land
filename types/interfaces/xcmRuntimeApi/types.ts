/* eslint-disable */

import type { Enum } from 'https://deno.land/x/polkadot/types-codec/mod.ts';

/** @name Error */
export interface Error extends Enum {
  readonly isUnsupported: boolean;
  readonly isVersionedConversionFailed: boolean;
  readonly type: 'Unsupported' | 'VersionedConversionFailed';
}

export type PHANTOM_XCMRUNTIMEAPI = 'xcmRuntimeApi';
