
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { HeaderExtended } from '../type/types.ts';
import type { DeriveApi } from '../types.ts';

import { map, mergeMap } from 'https://esm.sh/rxjs@7.8.1';

import { createHeaderExtended } from '../type/index.ts';
import { memo } from '../util/index.ts';
import { getAuthorDetails } from './util.ts';

/**
 * @name subscribeNewHeads
 * @returns A header with the current header (including extracted author).
 * @description An observable of the current block header and it's author.
 * @example
 * ```javascript
 * api.derive.chain.subscribeNewHeads((header) => {
 *   console.log(`block #${header.number} was authored by ${header.author}`);
 * });
 * ```
 */
export function subscribeNewHeads (instanceId: string, api: DeriveApi): () => Observable<HeaderExtended> {
  return memo(instanceId, (): Observable<HeaderExtended> =>
    api.rpc.chain.subscribeNewHeads().pipe(
      mergeMap((header) =>
        getAuthorDetails(api, header)
      ),
      map(([header, validators, author]): HeaderExtended => {
        header.createdAtHash = header.hash;

        return createHeaderExtended(header.registry, header, validators, author);
      })
    )
  );
}
