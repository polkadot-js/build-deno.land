
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  Metadata: [
    {
      methods: {
        metadata: {
          description: 'Returns the metadata of a runtime',
          params: [],
          type: 'OpaqueMetadata'
        }
      },
      version: 1
    }
  ]
};
