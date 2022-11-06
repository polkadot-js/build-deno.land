// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.7';
import type { DeriveApi, DeriveReferendumExt } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.5.7';

import { objectSpread } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';

export function referendums (instanceId: string, api: DeriveApi): () => Observable<DeriveReferendumExt[]> {
  return memo(instanceId, (): Observable<DeriveReferendumExt[]> =>
    api.derive.democracy.referendumsActive().pipe(
      switchMap((referendums) =>
        referendums.length
          ? combineLatest([
            of(referendums),
            api.derive.democracy._referendumsVotes(referendums)
          ])
          : of([[], []])
      ),
      map(([referendums, votes]) =>
        referendums.map((referendum, index): DeriveReferendumExt =>
          objectSpread({}, referendum, votes[index])
        )
      )
    )
  );
}
