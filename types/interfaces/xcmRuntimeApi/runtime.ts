
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  LocationToAccountApi: [
    {
      methods: {
        convert_location: {
          description: 'Converts `Location` to `AccountId`',
          params: [
            {
              name: 'location',
              type: 'XcmVersionedLocation'
            }
          ],
          type: 'Result<AccountId, Error>'
        }
      },
      version: 1
    }
  ]
};
