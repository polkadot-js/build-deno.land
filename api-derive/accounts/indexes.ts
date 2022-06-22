// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://cdn.skypack.dev/rxjs@7.5.5';
import type { AccountIndexes, DeriveApi } from '../types.ts';

import { map, of, startWith } from 'https://cdn.skypack.dev/rxjs@7.5.5';

import { memo } from '../util/index.ts';

let indicesCache: AccountIndexes | null = null;

function queryAccounts (api: DeriveApi): Observable<AccountIndexes> {
  return api.query.indices.accounts.entries().pipe(
    map((entries): AccountIndexes =>
      entries.reduce((indexes: AccountIndexes, [key, idOpt]): AccountIndexes => {
        if (idOpt.isSome) {
          indexes[idOpt.unwrap()[0].toString()] = api.registry.createType('AccountIndex', key.args[0]);
        }

        return indexes;
      }, {})
    )
  );
}

/**
 * @name indexes
 * @returns Returns all the indexes on the system.
 * @description This is an unwieldly query since it loops through
 * all of the enumsets and returns all of the values found. This could be up to 32k depending
 * on the number of active accounts in the system
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.accounts.indexes((indexes) => {
 *   console.log('All existing AccountIndexes', indexes);
 * });
 * ```
 */
export function indexes (instanceId: string, api: DeriveApi): () => Observable<AccountIndexes> {
  return memo(instanceId, (): Observable<AccountIndexes> =>
    indicesCache
      ? of(indicesCache)
      : (
        api.query.indices
          ? queryAccounts(api).pipe(startWith({}))
          : of({} as AccountIndexes)
      ).pipe(
        map((indices): AccountIndexes => {
          indicesCache = indices;

          return indices;
        })
      )
  );
}