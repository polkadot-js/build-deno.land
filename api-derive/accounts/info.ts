
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Bytes, Option, u32 } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { AccountId, AccountIndex, Address, Balance } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { DeriveAccountInfo, DeriveAccountRegistration, DeriveApi } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { u8aToString } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';

function retrieveNick (api: DeriveApi, accountId?: AccountId): Observable<string | undefined> {
  return ((
    accountId && api.query['nicks']?.['nameOf']
      ? api.query['nicks']['nameOf'](accountId)
      : of(undefined)
  ) as Observable<Option<ITuple<[Bytes, Balance]>> | undefined>).pipe(
    map((nameOf): string | undefined =>
      nameOf?.isSome
        ? u8aToString(nameOf.unwrap()[0]).substring(0, (api.consts['nicks']['maxLength'] as u32).toNumber())
        : undefined
    )
  );
}

/**
 * @name info
 * @description Returns aux. info with regards to an account, current that includes the accountId, accountIndex, identity and nickname
 */
export function info (instanceId: string, api: DeriveApi): (address?: AccountIndex | AccountId | Address | Uint8Array | string | null) => Observable<DeriveAccountInfo> {
  return memo(instanceId, (address?: AccountIndex | AccountId | Address | Uint8Array | string | null): Observable<DeriveAccountInfo> =>
    api.derive.accounts.idAndIndex(address).pipe(
      switchMap(([accountId, accountIndex]): Observable<[Partial<DeriveAccountInfo>, DeriveAccountRegistration, string | undefined]> =>
        combineLatest([
          of({ accountId, accountIndex }),
          api.derive.accounts.identity(accountId),
          retrieveNick(api, accountId)
        ])
      ),
      map(([{ accountId, accountIndex }, identity, nickname]): DeriveAccountInfo => ({
        accountId, accountIndex, identity, nickname
      }))
    ));
}
