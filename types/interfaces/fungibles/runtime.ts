
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  FungiblesApi: [
    {
      methods: {
        query_account_balances: {
          description: 'Returns the list of all `MultiAsset` that an `AccountId` has',
          params: [
            {
              name: 'account',
              type: 'AccountId'
            }
          ],
          type: 'Result<Vec<XcmV3MultiAsset>, FungiblesAccessError>'
        }
      },
      version: 1
    },
    {
      methods: {
        query_account_balances: {
          description: 'Returns the list of all `MultiAsset` that an `AccountId` has',
          params: [
            {
              name: 'account',
              type: 'AccountId'
            }
          ],
          type: 'Result<XcmVersionedMultiAssets, FungiblesAccessError>'
        }
      },
      version: 2
    }
  ]
};
