
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  NominationPoolsApi: [
    {
      methods: {
        pending_rewards: {
          description: 'Returns the pending rewards for the given member.',
          params: [
            {
              name: 'member',
              type: 'AccountId'
            }
          ],
          type: 'Balance'
        }
      },
      version: 1
    }
  ]
};
