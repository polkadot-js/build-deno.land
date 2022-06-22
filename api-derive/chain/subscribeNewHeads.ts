// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://cdn.skypack.dev/rxjs@7.5.5';
import type { HeaderExtended } from '../type/types.ts';
import type { DeriveApi } from '../types.ts';

import { combineLatest, map, of } from 'https://cdn.skypack.dev/rxjs@7.5.5';

import { createHeaderExtended } from '../type/index.ts';
import { memo } from '../util/index.ts';

/**
 * @name subscribeNewHeads
 * @returns A header with the current header (including extracted author)
 * @description An observable of the current block header and it's author
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.subscribeNewHeads((header) => {
 *   console.log(`block #${header.number} was authored by ${header.author}`);
 * });
 * ```
 */
export function subscribeNewHeads (instanceId: string, api: DeriveApi): () => Observable<HeaderExtended> {
  return memo(instanceId, (): Observable<HeaderExtended> =>
    combineLatest([
      api.rpc.chain.subscribeNewHeads(),
      api.query.session
        ? api.query.session.validators()
        : of(undefined)
    ]).pipe(
      map(([header, validators]): HeaderExtended => {
        header.createdAtHash = header.hash;

        return createHeaderExtended(header.registry, header, validators);
      })
    )
  );
}
