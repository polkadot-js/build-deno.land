
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

export default {
  rpc: {},
  types: {
    WeightToFeeCoefficient: {
      coeffInteger: 'Balance',
      coeffFrac: 'Perbill',
      negative: 'bool',
      degree: 'u8'
    }
  }
} as Definitions;
