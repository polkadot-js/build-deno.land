
import type { DefinitionsRpc } from '../../types/index.ts';

export const rpc: DefinitionsRpc = {
  epochAuthorship: {
    description: 'Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore',
    params: [],
    type: 'HashMap<AuthorityId, EpochAuthorship>'
  }
};
