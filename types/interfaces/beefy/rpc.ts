
import type { DefinitionsRpc } from '../../types/index.ts';

export const rpc: DefinitionsRpc = {
  getFinalizedHead: {
    description: 'Returns hash of the latest BEEFY finalized block as seen by this client.',
    params: [],
    type: 'H256'
  },
  subscribeJustifications: {
    description: 'Returns the block most recently finalized by BEEFY, alongside side its justification.',
    params: [],
    pubsub: [
      'justifications',
      'subscribeJustifications',
      'unsubscribeJustifications'
    ],
    type: 'BeefySignedCommitment'
  }
};
