
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

export default {
  rpc: {},
  types: {
    Multisig: {
      when: 'Timepoint',
      deposit: 'Balance',
      depositor: 'AccountId',
      approvals: 'Vec<AccountId>'
    },
    Timepoint: {
      height: 'BlockNumber',
      index: 'u32'
    }
  }
} as Definitions;
