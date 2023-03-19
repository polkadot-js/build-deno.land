
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { Option } from 'https://deno.land/x/polkadot@0.2.32/types/mod.ts';
import type { AccountId32 } from 'https://deno.land/x/polkadot@0.2.32/types/interfaces/index.ts';
import type { PalletBagsListListBag, PalletBagsListListNode } from 'https://deno.land/x/polkadot@0.2.32/types/lookup.ts';
import type { DeriveApi } from '../types.ts';

import { BehaviorSubject, map, of, switchMap, tap, toArray } from 'https://esm.sh/rxjs@7.8.0';

import { nextTick } from 'https://deno.land/x/polkadot@0.2.32/util/mod.ts';

import { memo } from '../util/index.ts';
import { getQueryInterface } from './util.ts';

function traverseLinks (api: DeriveApi, head: AccountId32 | string): Observable<PalletBagsListListNode[]> {
  const subject = new BehaviorSubject<AccountId32 | string>(head);
  const query = getQueryInterface(api);

  return subject.pipe(
    switchMap((account) =>
      query.listNodes<Option<PalletBagsListListNode>>(account)
    ),
    tap((node: Option<PalletBagsListListNode>): void => {
      nextTick((): void => {
        node.isSome && node.value.next.isSome
          ? subject.next(node.unwrap().next.unwrap())
          : subject.complete();
      });
    }),
    toArray(), // toArray since we want to startSubject to be completed
    map((all: Option<PalletBagsListListNode>[]) =>
      all.map((o) => o.unwrap())
    )
  );
}

export function listNodes (instanceId: string, api: DeriveApi): (bag: PalletBagsListListBag | null) => Observable<PalletBagsListListNode[]> {
  return memo(instanceId, (bag: PalletBagsListListBag | null): Observable<PalletBagsListListNode[]> =>
    bag && bag.head.isSome
      ? traverseLinks(api, bag.head.unwrap())
      : of([])
  );
}
