
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { rpc } from './rpc.ts';
import { runtime } from './runtime.ts';

export default {
  rpc,
  runtime,
  types: {
    StorageKind: {
      _enum: {
        PERSISTENT: 1,
        LOCAL: 2
      }
    }
  }
} as Definitions;
