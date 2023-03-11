
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  StakingApi: [
    {
      methods: {
        nominations_quota: {
          description: 'Returns the nominations quota for a nominator with a given balance.',
          params: [
            {
              name: 'balance',
              type: 'Balance'
            }
          ],
          type: 'u32'
        }
      },
      version: 1
    }
  ]
};
