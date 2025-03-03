
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Option } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { H256 } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { FrameSupportPreimagesBounded, PalletDemocracyVoteThreshold } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { DeriveApi, DeriveProposalExternal } from '../types.ts';

import { map, of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { memo } from '../util/index.ts';
import { getImageHashBounded } from './util.ts';

function withImage (api: DeriveApi, nextOpt: Option<ITuple<[H256 | FrameSupportPreimagesBounded, PalletDemocracyVoteThreshold]>>): Observable<DeriveProposalExternal | null> {
  if (nextOpt.isNone) {
    return of(null);
  }

  const [hash, threshold] = nextOpt.unwrap();

  return api.derive.democracy.preimage(hash).pipe(
    map((image): DeriveProposalExternal => ({
      image,
      imageHash: getImageHashBounded(hash),
      threshold
    }))
  );
}

/**
 * @name nextExternal
 * @description Retrieves the next external proposal that is scheduled for a referendum.
 * @example
 * ```javascript
 * const nextExternal = await api.derive.democracy.nextExternal();
 * console.log("Next external proposal:", nextExternal);
 * ```
 */
export function nextExternal (instanceId: string, api: DeriveApi): () => Observable<DeriveProposalExternal | null> {
  return memo(instanceId, (): Observable<DeriveProposalExternal | null> =>
    api.query.democracy?.nextExternal
      ? api.query.democracy.nextExternal().pipe(
        switchMap((nextOpt) => withImage(api, nextOpt))
      )
      : of(null)
  );
}
