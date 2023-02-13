
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { rpc } from './rpc.ts';

export default {
  rpc,
  types: {
    ExtrinsicOrHash: {
      _enum: {
        Hash: 'Hash',
        Extrinsic: 'Bytes'
      }
    },
    ExtrinsicStatus: {
      _enum: {
        Future: 'Null',
        Ready: 'Null',
        Broadcast: 'Vec<Text>',
        InBlock: 'Hash',
        Retracted: 'Hash',
        FinalityTimeout: 'Hash',
        Finalized: 'Hash',
        Usurped: 'Hash',
        Dropped: 'Null',
        Invalid: 'Null'
      }
    }
  }
} as Definitions;
