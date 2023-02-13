
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  AuthorityDiscoveryApi: [
    {
      methods: {
        authorities: {
          description: 'Retrieve authority identifiers of the current and next authority set.',
          params: [],
          type: 'Vec<AuthorityId>'
        }
      },
      version: 1
    }
  ]
};
