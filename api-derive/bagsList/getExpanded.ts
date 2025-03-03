
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { BN } from 'https://deno.land/x/polkadot/util/mod.ts';
import type { DeriveApi } from '../types.ts';
import type { Bag, BagExpanded } from './types.ts';

import { map, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { objectSpread } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';

/**
 * @name expand
 * @description Expands a given bag by retrieving all its nodes (accounts contained within the bag).
 * @param {Bag} bag The bag to be expanded.
 */
export function expand (instanceId: string, api: DeriveApi): (bag: Bag) => Observable<BagExpanded> {
  return memo(instanceId, (bag: Bag): Observable<BagExpanded> =>
    api.derive.bagsList.listNodes(bag.bag).pipe(
      map((nodes) => objectSpread({ nodes }, bag))
    )
  );
}

/**
 * @name getExpanded
 * @description Retrieves and expands a specific bag from the BagsList pallet.
 * @param {BN | number} id The id of the bag to expand.
 */
export function getExpanded (instanceId: string, api: DeriveApi): (id: BN | number) => Observable<BagExpanded> {
  return memo(instanceId, (id: BN | number): Observable<BagExpanded> =>
    api.derive.bagsList.get(id).pipe(
      switchMap((bag) =>
        api.derive.bagsList.expand(bag)
      )
    )
  );
}
