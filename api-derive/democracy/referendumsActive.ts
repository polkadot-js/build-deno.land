
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { DeriveApi, DeriveReferendum } from '../types.ts';

import { of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

/**
 * @name referendumsActive
 * @description Retrieves information about active referendums.
 * @example
 * ```javascript
 * const referendums = await api.derive.democracy.referendumsActive();
 * console.log("Active Referendums:", referendums);
 * ```
 */
export function referendumsActive (instanceId: string, api: DeriveApi): () => Observable<DeriveReferendum[]> {
  return memo(instanceId, (): Observable<DeriveReferendum[]> =>
    api.derive.democracy.referendumIds().pipe(
      switchMap((ids): Observable<DeriveReferendum[]> =>
        ids.length
          ? api.derive.democracy.referendumsInfo(ids)
          : of([])
      )
    )
  );
}
