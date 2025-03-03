
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { AccountId, AccountIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi } from '../types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

/**
 * @name indexToId
 * @description Resolves an AccountIndex (short address) to the full AccountId.
 * @param {( AccountIndex | string )} accountIndex An accounts index in different formats.
 * @example
 * ```javascript
 * const ALICE = "13AU";
 * const id = await api.derive.accounts.indexToId(ALICE);
 * console.log(id);
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
