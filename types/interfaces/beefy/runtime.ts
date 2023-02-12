
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  BeefyApi: [
    {
      methods: {
        validator_set: {
          description: 'Return the current active BEEFY validator set',
          params: [],
          type: 'Option<ValidatorSet>'
        }
      },
      version: 1
    }
  ],
  BeefyMmrApi: [
    {
      methods: {
        authority_set_proof: {
          description: 'Return the currently active BEEFY authority set proof.',
          params: [],
          type: 'BeefyAuthoritySet'
        },
        next_authority_set_proof: {
          description: 'Return the next/queued BEEFY authority set proof.',
          params: [],
          type: 'BeefyNextAuthoritySet'
        }
      },
      version: 1
    }
  ]
};
