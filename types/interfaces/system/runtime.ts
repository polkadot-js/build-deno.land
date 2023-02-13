
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  AccountNonceApi: [
    {
      methods: {
        account_nonce: {
          description: 'The API to query account nonce (aka transaction index)',
          params: [
            {
              name: 'accountId',
              type: 'AccountId'
            }
          ],
          type: 'Index'
        }
      },
      version: 1
    }
  ]
};
