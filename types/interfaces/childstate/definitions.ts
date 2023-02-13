
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { rpc } from './rpc.ts';

export default {
  rpc,
  types: {
    // StorageKey extends Bytes
    PrefixedStorageKey: 'StorageKey'
  }
} as Definitions;
