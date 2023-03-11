
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { AccountId, AccountIndex, Address } from 'https://deno.land/x/polkadot@0.2.30/types/interfaces/index.ts';
import type { DeriveApi, DeriveBalancesAccount } from '../types.ts';

import { combineLatest, of } from 'https://esm.sh/rxjs@7.8.0';

import { memo } from '../util/index.ts';

export function votingBalances (instanceId: string, api: DeriveApi): (addresses?: (AccountId | AccountIndex | Address | string)[]) => Observable<DeriveBalancesAccount[]> {
  return memo(instanceId, (addresses?: (AccountId | AccountIndex | Address | string)[]): Observable<DeriveBalancesAccount[]> =>
    !addresses || !addresses.length
      ? of([] as DeriveBalancesAccount[])
      : combineLatest(
        addresses.map((accountId): Observable<DeriveBalancesAccount> =>
          api.derive.balances.account(accountId)
        )
      )
  );
}
