
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { runtime } from './runtime.ts';

export default {
  rpc: {},
  runtime,
  types: {
    FungiblesAccessError: {
      _enum: ['AssetIdConversionFailed', 'AmountToBalanceConversionFailed']
    }
  }
} as Definitions;
