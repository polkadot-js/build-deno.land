
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { PalletDemocracyReferendumInfo } from 'https://deno.land/x/polkadot@0.2.38/types/lookup.ts';
import type { DeriveApi } from '../types.ts';

import { map, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';

type ReferendumInfoFinished = PalletDemocracyReferendumInfo['asFinished'];

export function referendumsFinished (instanceId: string, api: DeriveApi): () => Observable<ReferendumInfoFinished[]> {
  return memo(instanceId, (): Observable<ReferendumInfoFinished[]> =>
    api.derive.democracy.referendumIds().pipe(
      switchMap((ids) =>
        api.query.democracy.referendumInfoOf.multi(ids)
      ),
      map((infos): ReferendumInfoFinished[] =>
        infos
          .map((o) => o.unwrapOr(null))
          .filter((info): info is PalletDemocracyReferendumInfo => !!info && info.isFinished)
          .map((info) => info.asFinished)
      )
    )
  );
}
