
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { ReferendumIndex } from 'https://deno.land/x/polkadot@0.2.31/types/interfaces/index.ts';
import type { BN } from 'https://deno.land/x/polkadot@0.2.31/util/mod.ts';
import type { DeriveApi } from '../types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.8.0';

import { memo } from '../util/index.ts';

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
