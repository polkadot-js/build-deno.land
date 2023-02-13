
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

export default {
  rpc: {},
  types: {
    UncleEntryItem: {
      _enum: {
        InclusionHeight: 'BlockNumber',
        Uncle: '(Hash, Option<AccountId>)'
      }
    }
  }
} as Definitions;
