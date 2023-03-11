
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { runtime } from './runtime.ts';

export default {
  rpc: {},
  runtime,
  types: {
    NpApiError: {
      _enum: ['MemberNotFound', 'OverflowInPendingRewards']
    },
    NpPoolId: 'u32'
  }
} as Definitions;
