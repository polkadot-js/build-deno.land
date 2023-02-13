
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { rpc } from './rpc.ts';

export default {
  rpc,
  types: {
    CreatedBlock: {
      _alias: {
        blockHash: 'hash'
      },
      blockHash: 'BlockHash',
      aux: 'ImportedAux'
    },
    ImportedAux: {
      headerOnly: 'bool',
      clearJustificationRequests: 'bool',
      needsJustification: 'bool',
      badJustification: 'bool',
      needsFinalityProof: 'bool',
      isNewBest: 'bool'
    }
  }
} as Definitions;
