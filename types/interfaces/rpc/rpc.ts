
import type { DefinitionsRpc } from '../../types/index.ts';

export const rpc: DefinitionsRpc = {
  methods: {
    description: 'Retrieves the list of RPC methods that are exposed by the node',
    params: [],
    type: 'RpcMethods'
  }
};
