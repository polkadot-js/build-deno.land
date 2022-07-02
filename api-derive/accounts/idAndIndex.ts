// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { AccountId, AccountIndex, Address } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { AccountIdAndIndex, DeriveApi } from '../types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.5.5';

import { isU8a } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import { decodeAddress } from 'https://deno.land/x/polkadot@0.0.2/util-crypto/mod.ts';

import { memo } from '../util/index.ts';

/**
 * @name idAndIndex
 * @param {(Address | AccountId | AccountIndex | Uint8Array | string | null)} address - An accounts address in various formats.
 * @description  An array containing the [[AccountId]] and [[AccountIndex]] as optional values.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.accounts.idAndIndex('F7Hs', ([id, ix]) => {
 *   console.log(`AccountId #${id} with corresponding AccountIndex ${ix}`);
 * });
 * ```
 */
export function idAndIndex (instanceId: string, api: DeriveApi): (address?: Address | AccountId | AccountIndex | Uint8Array | string | null) => Observable<AccountIdAndIndex> {
  return memo(instanceId, (address?: Address | AccountId | AccountIndex | Uint8Array | string | null): Observable<AccountIdAndIndex> => {
    try {
      // yes, this can fail, don't care too much, catch will catch it
      const decoded = isU8a(address)
        ? address
        : decodeAddress((address || '').toString());

      if (decoded.length > 8) {
        const accountId = api.registry.createType('AccountId', decoded);

        return api.derive.accounts.idToIndex(accountId).pipe(
          map((accountIndex): AccountIdAndIndex => [accountId, accountIndex])
        );
      }

      const accountIndex = api.registry.createType('AccountIndex', decoded);

      return api.derive.accounts.indexToId(accountIndex.toString()).pipe(
        map((accountId): AccountIdAndIndex => [accountId, accountIndex])
      );
    } catch (error) {
      return of([undefined, undefined]);
    }
  });
}
