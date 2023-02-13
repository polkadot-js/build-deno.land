
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { runtime } from './runtime.ts';

export default {
  rpc: {},
  runtime,
  types: {
    TransactionSource: {
      _enum: ['InBlock', 'Local', 'External']
    },
    TransactionValidity: 'Result<ValidTransaction, TransactionValidityError>',
    ValidTransaction: {
      priority: 'TransactionPriority',
      requires: 'Vec<TransactionTag>',
      provides: 'Vec<TransactionTag>',
      longevity: 'TransactionLongevity',
      propagate: 'bool'
    }
  }
} as Definitions;
