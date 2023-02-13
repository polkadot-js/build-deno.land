
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

export default {
  rpc: {},
  types: {
    AccountStatus: {
      validity: 'AccountValidity',
      freeBalance: 'Balance',
      lockedBalance: 'Balance',
      signature: 'Vec<u8>',
      vat: 'Permill'
    },
    AccountValidity: {
      _enum: ['Invalid', 'Initiated', 'Pending', 'ValidLow', 'ValidHigh', 'Completed']
    }
  }
} as Definitions;
