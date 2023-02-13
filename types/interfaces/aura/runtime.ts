
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  AuraApi: [
    {
      methods: {
        authorities: {
          description: 'Return the current set of authorities.',
          params: [],
          type: 'Vec<AuthorityId>'
        },
        slot_duration: {
          description: 'Returns the slot duration for Aura.',
          params: [],
          type: 'SlotDuration'
        }
      },
      version: 1
    }
  ]
};
