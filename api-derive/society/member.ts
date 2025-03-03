
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { AccountId } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi, DeriveSocietyMember } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

/**
 * @name member
 * @description Get the member info for a society.
 * @param { AccountId } accountId
 * @example
 * ```javascript
 * const member = await api.derive.society.member(ALICE);
 * console.log(member);
 * ```
 */
export function member (instanceId: string, api: DeriveApi): (accountId: AccountId) => Observable<DeriveSocietyMember> {
  return memo(instanceId, (accountId: AccountId): Observable<DeriveSocietyMember> =>
    api.derive.society._members([accountId]).pipe(
      map(([result]) => result)
    )
  );
}
