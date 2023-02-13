
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  CollectCollationInfo: [
    {
      methods: {
        collect_collation_info: {
          description: 'Collect information about a collation.',
          params: [
            {
              name: 'header',
              type: 'Header'
            }
          ],
          type: 'CollationInfo'
        }
      },
      version: 2
    },
    {
      methods: {
        collect_collation_info: {
          description: 'Collect information about a collation.',
          params: [],
          type: 'CollationInfoV1'
        }
      },
      version: 1
    }
  ]
};
