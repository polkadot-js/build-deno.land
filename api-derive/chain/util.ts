
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { QueryableStorage } from 'https://deno.land/x/polkadot@0.2.35/api-base/types/index.ts';
import type { Compact, Vec } from 'https://deno.land/x/polkadot@0.2.35/types/mod.ts';
import type { AccountId, Address, BlockNumber, Header } from 'https://deno.land/x/polkadot@0.2.35/types/interfaces/index.ts';
import type { Codec, IOption } from 'https://deno.land/x/polkadot@0.2.35/types/types/index.ts';
import type { DeriveApi } from '../types.ts';

import { combineLatest, map, of } from 'https://esm.sh/rxjs@7.8.0';

import { memo, unwrapBlockNumber } from '../util/index.ts';

export type BlockNumberDerive = (instanceId: string, api: DeriveApi) => () => Observable<BlockNumber>;

export function createBlockNumberDerive <T extends { number: Compact<BlockNumber> | BlockNumber }> (fn: (api: DeriveApi) => Observable<T>): BlockNumberDerive {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, () =>
      fn(api).pipe(
        map(unwrapBlockNumber)
      )
    );
}

export function getAuthorDetails (header: Header, queryAt: QueryableStorage<'rxjs'>): Observable<[Header, Vec<AccountId> | null, AccountId | null]> {
  const validators = queryAt.session
    ? queryAt.session.validators()
    : of(null);

  // nimbus consensus stores the session key of the block author in header logs
  const { logs: [log] } = header.digest;
  const loggedAuthor = (log && (
    (log.isConsensus && log.asConsensus[0].isNimbus && log.asConsensus[1]) ||
    (log.isPreRuntime && log.asPreRuntime[0].isNimbus && log.asPreRuntime[1])
  ));

  if (loggedAuthor) {
    // use the author mapping pallet, if available (ie: moonbeam, moonriver), to map session (nimbus) key to author (collator/validator) key
    if (queryAt.authorMapping && queryAt.authorMapping.mappingWithDeposit) {
      return combineLatest([
        of(header),
        validators,
        queryAt.authorMapping.mappingWithDeposit<IOption<{ account: AccountId } & Codec>>(loggedAuthor)
          .pipe(map((opt) => opt.unwrapOr({ account: null }).account))
      ]);
    }

    // fall back to session pallet, if available (ie: manta, calamari), to map session (nimbus) key to author (collator/validator) key
    if (queryAt.session && queryAt.session.queuedKeys) {
      return combineLatest([
        of(header),
        validators,
        queryAt.session.queuedKeys<[AccountId, { nimbus: Address }][]>().pipe(
          map((queuedKeys) => queuedKeys.find((sessionKey) => sessionKey[1].nimbus.toHex() === loggedAuthor.toHex())),
          map((sessionKey) => (sessionKey) ? sessionKey[0] : null)
        )
      ]);
    }
  }

  // normal operation, non-mapping
  return combineLatest([
    of(header),
    validators,
    of(null)
  ]);
}
