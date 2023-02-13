
import type { DefinitionsRpc } from '../../types/index.ts';

export const rpc: DefinitionsRpc = {
  getBlockStats: {
    description: 'Reexecute the specified `block_hash` and gather statistics while doing so',
    params: [
      {
        isHistoric: true,
        name: 'at',
        type: 'Hash'
      }
    ],
    type: 'Option<BlockStats>'
  }
};
