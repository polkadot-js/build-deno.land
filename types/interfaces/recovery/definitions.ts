
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

export default {
  rpc: {},
  types: {
    ActiveRecovery: {
      created: 'BlockNumber',
      deposit: 'Balance',
      friends: 'Vec<AccountId>'
    },
    RecoveryConfig: {
      delayPeriod: 'BlockNumber',
      deposit: 'Balance',
      friends: 'Vec<AccountId>',
      threshold: 'u16'
    }
  }
} as Definitions;
