
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { rpc } from './rpc.ts';

export default {
  rpc,
  types: {
    BlockStats: {
      witnessLen: 'u64',
      witnessCompactLen: 'u64',
      blockLen: 'u64',
      blockNumExtrinsics: 'u64'
    }
  }
} as Definitions;
