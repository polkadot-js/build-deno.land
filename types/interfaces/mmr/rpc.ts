
import type { DefinitionsRpc } from '../../types/index.ts';

export const rpc: DefinitionsRpc = {
  generateProof: {
    description: 'Generate MMR proof for the given block numbers.',
    params: [
      {
        name: 'blockNumbers',
        type: 'Vec<u64>'
      },
      {
        isOptional: true,
        name: 'bestKnownBlockNumber',
        type: 'u64'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'MmrLeafBatchProof'
  },

  root: {
    description: 'Get the MMR root hash for the current best block.',
    params: [
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'MmrHash'
  },

  verifyProof: {
    description: 'Verify an MMR proof',
    params: [
      {
        name: 'proof',
        type: 'MmrLeafBatchProof'
      }
    ],
    type: 'bool'
  },

  verifyProofStateless: {
    description: 'Verify an MMR proof statelessly given an mmr_root',
    params: [
      {
        name: 'root',
        type: 'MmrHash'
      },
      {
        name: 'proof',
        type: 'MmrLeafBatchProof'
      }
    ],
    type: 'bool'
  }
};
