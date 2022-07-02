// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { AccountId } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { DeriveApi } from '../types.ts';

import { map, startWith, switchMap } from 'https://esm.sh/rxjs@7.5.5';

import { drr, memo } from '../util/index.ts';

function onBondedEvent (api: DeriveApi): Observable<number> {
  let current = Date.now();

  return api.query.system.events().pipe(
    map((events): number => {
      current = events.filter(({ event, phase }): boolean => {
        try {
          return phase.isApplyExtrinsic &&
            event.section === 'staking' &&
            event.method === 'Bonded';
        } catch {
          return false;
        }
      })
        ? Date.now()
        : current;

      return current;
    }),
    startWith(current),
    drr({ skipTimeout: true })
  );
}

/**
 * @description Retrieve the list of all validator stashes
 */
export function stashes (instanceId: string, api: DeriveApi): () => Observable<AccountId[]> {
  return memo(instanceId, (): Observable<AccountId[]> =>
    onBondedEvent(api).pipe(
      switchMap(() => api.query.staking.validators.keys()),
      map((keys) => keys.map(({ args: [v] }) => v).filter((a) => a))
    )
  );
}
