
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  MixnetApi: [
    {
      methods: {
        current_mixnodes: {
          description: 'Get the index and phase of the current session.',
          params: [],
          type: 'Result<Mixnode, MixnodesErr>'
        },
        maybe_register: {
          description: 'Try to register a mixnode for the next session.',
          params: [
            {
              name: 'session_index',
              type: 'u32'
            },
            {
              name: 'mixnode',
              type: 'Mixnode'
            }
          ],
          type: 'bool'
        },
        prev_mixnodes: {
          description: 'Get the index and phase of the current session.',
          params: [],
          type: 'Result<Mixnode, MixnodesErr>'
        },
        session_status: {
          description: 'Get the index and phase of the current session.',
          params: [],
          type: 'SessionStatus'
        }
      },
      version: 1
    }
  ]
};
