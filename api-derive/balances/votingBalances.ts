
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { AccountId, AccountIndex, Address } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi, DeriveBalancesAccount } from '../types.ts';

import { combineLatest, of } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

/**
 * @name votingBalances
 * @description Retrieves the balance information for multiple accounts, typically used in governance-related contexts to check voting power.
 * @param {(AccountId | AccountIndex | Address | string)[]} addresses An array of account identifiers.
 * @example
 * ```javascript
 * const addresses = ["5D4b...Zf1", "5HGj...yrV"];
 * const balances = await api.derive.balances.votingBalances(addresses);
 * console.log("Voting Balances:", balances);
 * ```
 */
export function votingBalances (instanceId: string, api: DeriveApi): (addresses?: (AccountId | AccountIndex | Address | string)[]) => Observable<DeriveBalancesAccount[]> {
  return memo(instanceId, (addresses?: (AccountId | AccountIndex | Address | string)[]): Observable<DeriveBalancesAccount[]> =>
    !addresses?.length
      ? of([] as DeriveBalancesAccount[])
      : combineLatest(
        addresses.map((accountId): Observable<DeriveBalancesAccount> =>
          api.derive.balances.account(accountId)
        )
      )
  );
}
