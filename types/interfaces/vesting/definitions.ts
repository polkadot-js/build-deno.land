
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

export default {
  rpc: {},
  types: {
    VestingInfo: {
      locked: 'Balance',
      perBlock: 'Balance',
      startingBlock: 'BlockNumber'
    }
  }
} as Definitions;
