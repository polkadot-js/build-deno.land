
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  AssetsApi: [
    {
      methods: {
        account_balances: {
          description: 'Return the current set of authorities.',
          params: [
            {
              name: 'account',
              type: 'AccountId'
            }
          ],
          type: 'Vec<(u32, TAssetBalance)>'
        }
      },
      version: 1
    }
  ]
};
