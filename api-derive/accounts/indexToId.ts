
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { AccountId, AccountIndex } from 'https://deno.land/x/polkadot@0.2.40/types/interfaces/index.ts';
import type { DeriveApi } from '../types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

/**
 * @name indexToId
 * @param {( AccountIndex | string )} accountIndex - An accounts index in different formats.
 * @returns Returns the corresponding AccountId.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.accounts.indexToId('F7Hs', (accountId) => {
 *   console.log(`The AccountId of F7Hs is ${accountId}`);
 * });
 * ```
 */
export function indexToId (instanceId: string, api: DeriveApi): (accountIndex: AccountIndex | string) => Observable<AccountId | undefined> {
  return memo(instanceId, (accountIndex: AccountIndex | string): Observable<AccountId | undefined> =>
    api.query.indices
      ? api.query.indices.accounts(accountIndex).pipe(
        map((optResult): AccountId | undefined =>
          optResult.unwrapOr([])[0]
        )
      )
      : of(undefined)
  );
}
