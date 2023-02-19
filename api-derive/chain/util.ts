
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { QueryableStorage } from 'https://deno.land/x/polkadot@0.2.28/api-base/types/index.ts';
import type { Compact, Vec } from 'https://deno.land/x/polkadot@0.2.28/types/mod.ts';
import type { AccountId, BlockNumber, Header } from 'https://deno.land/x/polkadot@0.2.28/types/interfaces/index.ts';
import type { Codec, IOption } from 'https://deno.land/x/polkadot@0.2.28/types/types/index.ts';
import type { DeriveApi } from '../types.ts';

import { combineLatest, map, of } from 'https://esm.sh/rxjs@7.8.0';

import { memo, unwrapBlockNumber } from '../util/index.ts';

export type { BlockNumber } from 'https://deno.land/x/polkadot@0.2.28/types/interfaces/index.ts';

export function createBlockNumberDerive <T extends { number: Compact<BlockNumber> | BlockNumber }> (fn: (api: DeriveApi) => Observable<T>): (instanceId: string, api: DeriveApi) => () => Observable<BlockNumber> {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, () =>
      fn(api).pipe(
        map(unwrapBlockNumber)
      )
    );
}

export function getAuthorDetails (header: Header, queryAt: QueryableStorage<'rxjs'>): Observable<[Header, Vec<AccountId> | null, AccountId | null]> {
  // this is Moonbeam specific
  if (queryAt.authorMapping && queryAt.authorMapping.mappingWithDeposit) {
    const mapId = header.digest.logs[0] && (
      (header.digest.logs[0].isConsensus && header.digest.logs[0].asConsensus[1]) ||
      (header.digest.logs[0].isPreRuntime && header.digest.logs[0].asPreRuntime[1])
    );

    if (mapId) {
      return combineLatest([
        of(header),
        queryAt.session
          ? queryAt.session.validators()
          : of(null),
        queryAt.authorMapping.mappingWithDeposit<IOption<{ account: AccountId } & Codec>>(mapId).pipe(
          map((opt) =>
            opt.unwrapOr({ account: null }).account
          )
        )
      ]);
    }
  }

  // normal operation, non-mapping
  return combineLatest([
    of(header),
    queryAt.session
      ? queryAt.session.validators()
      : of(null),
    of(null)
  ]);
}
