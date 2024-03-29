/* eslint-disable */

import type { Enum } from 'https://deno.land/x/polkadot/types-codec/mod.ts';

/** @name FungiblesAccessError */
export interface FungiblesAccessError extends Enum {
  readonly isAssetIdConversionFailed: boolean;
  readonly isAmountToBalanceConversionFailed: boolean;
  readonly type: 'AssetIdConversionFailed' | 'AmountToBalanceConversionFailed';
}

export type PHANTOM_FUNGIBLES = 'fungibles';
