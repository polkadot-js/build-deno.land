
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { runtime } from './runtime.ts';

export default {
  rpc: {},
  runtime,
  types: {
    StatementStoreStatementSource: {
      _enum: ['Chain', 'Network', 'Local']
    },
    StatementStoreValidStatement: {
      maxCount: 'u32',
      maxSize: 'u32'
    },
    StatementStoreInvalidStatement: {
      _enum: ['BadProof', 'NoProof', 'InternalError']
    }
  }
} as Definitions;
