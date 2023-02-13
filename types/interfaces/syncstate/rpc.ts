
import type { DefinitionsRpc } from '../../types/index.ts';

export const rpc: DefinitionsRpc = {
  genSyncSpec: {
    description: 'Returns the json-serialized chainspec running the node, with a sync state.',
    endpoint: 'sync_state_genSyncSpec',
    params: [
      {
        name: 'raw',
        type: 'bool'
      }
    ],
    type: 'Json'
  }
};
