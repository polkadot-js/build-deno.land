
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { AccountId, AccountIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { AccountIndexes, DeriveApi } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

/**
 * @name idToIndex
 * @description Retrieves the corresponding AccountIndex.
 * @param {( AccountId | string )} accountId An accounts Id in different formats.
 * @example
 * ```javascript
 * const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
 * api.derive.accounts.idToIndex(ALICE, (accountIndex) => {
 *   console.log(`The AccountIndex of ${ALICE} is ${accountIndex}`);
 * });
 * ```
 */
export function idToIndex (instanceId: string, api: DeriveApi): (accountId: AccountId | string) => Observable<AccountIndex | undefined> {
  return memo(instanceId, (accountId: AccountId | string): Observable<AccountIndex | undefined> =>
    api.derive.accounts.indexes().pipe(
      map((indexes: AccountIndexes): AccountIndex | undefined =>
        indexes[accountId.toString()]
      )
    ));
}
