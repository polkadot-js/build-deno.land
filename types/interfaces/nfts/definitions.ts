
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { runtime } from './runtime.ts';

export default {
  rpc: {},
  runtime,
  types: {
    NftCollectionId: 'u32',
    NftItemId: 'u32'
  }
} as Definitions;
