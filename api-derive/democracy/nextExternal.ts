// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { Option } from 'https://deno.land/x/polkadot@0.0.3/types/mod.ts';
import type { H256 } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { PalletDemocracyVoteThreshold } from 'https://deno.land/x/polkadot@0.0.3/types/lookup.ts';
import type { ITuple } from 'https://deno.land/x/polkadot@0.0.3/types/types/index.ts';
import type { DeriveApi, DeriveProposalExternal } from '../types.ts';

import { map, of, switchMap } from 'https://esm.sh/rxjs@7.5.5';

import { memo } from '../util/index.ts';

function withImage (api: DeriveApi, nextOpt: Option<ITuple<[H256, PalletDemocracyVoteThreshold]>>): Observable<DeriveProposalExternal | null> {
  if (nextOpt.isNone) {
    return of(null);
  }

  const [imageHash, threshold] = nextOpt.unwrap();

  return api.derive.democracy.preimage(imageHash).pipe(
    map((image): DeriveProposalExternal => ({
      image,
      imageHash,
      threshold
    }))
  );
}

export function nextExternal (instanceId: string, api: DeriveApi): () => Observable<DeriveProposalExternal | null> {
  return memo(instanceId, (): Observable<DeriveProposalExternal | null> =>
    api.query.democracy?.nextExternal
      ? api.query.democracy.nextExternal().pipe(
        switchMap((nextOpt) => withImage(api, nextOpt))
      )
      : of(null)
  );
}
