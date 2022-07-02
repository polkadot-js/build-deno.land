// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { AccountId, AccountIndex, Address } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { DeriveApi } from '../types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.5.5';

import { assertReturn, isU8a } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import { decodeAddress } from 'https://deno.land/x/polkadot@0.0.2/util-crypto/mod.ts';

import { memo } from '../util/index.ts';

/**
 * @name accountId
 * @param {(Address | AccountId | AccountIndex | string | null)} address - An accounts address in various formats.
 * @description  An [[AccountId]]
 */
export function accountId (instanceId: string, api: DeriveApi): (address?: Address | AccountId | AccountIndex | string | null) => Observable<AccountId> {
  return memo(instanceId, (address?: Address | AccountId | AccountIndex | string | null): Observable<AccountId> => {
    const decoded = isU8a(address)
      ? address
      : decodeAddress((address || '').toString());

    if (decoded.length > 8) {
      return of(api.registry.createType('AccountId', decoded));
    }

    const accountIndex = api.registry.createType('AccountIndex', decoded);

    return api.derive.accounts.indexToId(accountIndex.toString()).pipe(
      map((a) => assertReturn(a, 'Unable to retrieve accountId'))
    );
  });
}
