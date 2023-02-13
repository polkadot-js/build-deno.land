
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

export default {
  rpc: {},
  types: {
    CallIndex: '(u8, u8)',
    LotteryConfig: {
      price: 'Balance',
      start: 'BlockNumber',
      length: 'BlockNumber',
      delay: 'BlockNumber',
      repeat: 'bool'
    }
  }
} as Definitions;
