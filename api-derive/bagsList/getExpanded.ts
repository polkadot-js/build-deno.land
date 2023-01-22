// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { BN } from 'https://deno.land/x/polkadot@0.2.23/util/mod.ts';
import type { DeriveApi } from '../types.ts';
import type { Bag, BagExpanded } from './types.ts';

import { map, switchMap } from 'https://esm.sh/rxjs@7.8.0';

import { objectSpread } from 'https://deno.land/x/polkadot@0.2.23/util/mod.ts';

import { memo } from '../util/index.ts';

export function expand (instanceId: string, api: DeriveApi): (bag: Bag) => Observable<BagExpanded> {
  return memo(instanceId, (bag: Bag): Observable<BagExpanded> =>
    api.derive.bagsList.listNodes(bag.bag).pipe(
      map((nodes) => objectSpread({ nodes }, bag))
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
