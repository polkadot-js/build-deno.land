// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.6';
import type { DeriveApi, DeriveReferendum } from '../types.ts';

import { of, switchMap } from 'https://esm.sh/rxjs@7.5.6';

import { memo } from '../util/index.ts';

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
