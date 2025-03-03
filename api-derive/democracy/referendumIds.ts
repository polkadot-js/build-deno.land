
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { ReferendumIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { BN } from 'https://deno.land/x/polkadot/util/mod.ts';
import type { DeriveApi } from '../types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

/**
 * @name referendumIds
 * @description Retrieves an array of active referendum IDs.
 * @example
 * ```javascript
 * const referendums = await api.derive.democracy.referendumIds();
 * ```
 */
export function referendumIds (instanceId: string, api: DeriveApi): () => Observable<BN[]> {
  return memo(instanceId, (): Observable<BN[]> =>
    api.query.democracy?.lowestUnbaked
      ? api.queryMulti<[ReferendumIndex, ReferendumIndex]>([
        api.query.democracy.lowestUnbaked,
        api.query.democracy.referendumCount
      ]).pipe(
        map(([first, total]): BN[] =>
          total.gt(first)
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            ? [...Array(total.sub(first).toNumber())].map((_, i): BN => first.addn(i))
            : []
        )
      )
      : of([])
  );
}
