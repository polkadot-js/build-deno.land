// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { BN } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import type { DeriveApi } from '../types.ts';
import type { Bag, BagExpanded } from './types.ts';

import { map, switchMap } from 'https://esm.sh/rxjs@7.5.5';

import { memo } from '../util/index.ts';

export function expand (instanceId: string, api: DeriveApi): (bag: Bag) => Observable<BagExpanded> {
  return memo(instanceId, (bag: Bag): Observable<BagExpanded> =>
    api.derive.bagsList.listNodes(bag.bag).pipe(
      map((nodes) => ({ ...bag, nodes }))
    )
  );
}

export function getExpanded (instanceId: string, api: DeriveApi): (id: BN | number) => Observable<BagExpanded> {
  return memo(instanceId, (id: BN | number): Observable<BagExpanded> =>
    api.derive.bagsList.get(id).pipe(
      switchMap((bag) =>
        api.derive.bagsList.expand(bag)
      )
    )
  );
}
