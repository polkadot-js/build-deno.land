
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { AccountId, Address, Balance } from 'https://deno.land/x/polkadot@0.2.43/types/interfaces/index.ts';
import type{ PalletElectionsPhragmenSeatHolder } from 'https://deno.land/x/polkadot@0.2.43/types/lookup.ts';
import type { Codec } from 'https://deno.land/x/polkadot@0.2.43/types/types/index.ts';
import type { Option } from 'https://deno.land/x/polkadot@0.2.43/types-codec/mod.ts';
import type { DeriveAccountFlags, DeriveApi } from '../types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.8.1';

import { isFunction } from 'https://deno.land/x/polkadot@0.2.43/util/mod.ts';

import { memo } from '../util/index.ts';

type FlagsIntermediate = [
  PalletElectionsPhragmenSeatHolder[] | [AccountId, Balance][] | undefined,
  AccountId[],
  AccountId[],
  AccountId[],
  Option<AccountId> | AccountId | undefined
];

function parseFlags (address: AccountId | Address | string | null | undefined, [electionsMembers, councilMembers, technicalCommitteeMembers, societyMembers, sudoKey]: FlagsIntermediate): DeriveAccountFlags {
  const addrStr = address?.toString();
  const isIncluded = (id: AccountId | Address | string) =>
    id.toString() === addrStr;

  return {
    isCouncil: (electionsMembers?.map((r) => Array.isArray(r) ? r[0] : r.who) || councilMembers || []).some(isIncluded),
    isSociety: (societyMembers || []).some(isIncluded),
    isSudo: sudoKey?.toString() === addrStr,
    isTechCommittee: (technicalCommitteeMembers || []).some(isIncluded)
  };
}

export function _flags (instanceId: string, api: DeriveApi): () => Observable<FlagsIntermediate> {
  return memo(instanceId, (): Observable<FlagsIntermediate> => {
    const results: unknown[] = [undefined, [], [], [], undefined];
    const calls = [
      (api.query.elections || api.query['phragmenElection'] || api.query['electionsPhragmen'])?.members,
      api.query.council?.members,
      api.query.technicalCommittee?.members,
      api.query.society?.members,
      api.query.sudo?.key
    ];
    const filtered = calls.filter((c) => c);

    if (!filtered.length) {
      return of(results as FlagsIntermediate);
    }

    return api.queryMulti(filtered).pipe(
      map((values: Codec[]): FlagsIntermediate => {
        let resultIndex = -1;

        for (let i = 0, count = calls.length; i < count; i++) {
          if (isFunction(calls[i])) {
            results[i] = values[++resultIndex];
          }
        }

        return results as FlagsIntermediate;
      })
    );
  });
}

/**
 * @name info
 * @description Returns account membership flags
 */
export function flags (instanceId: string, api: DeriveApi): (address?: AccountId | Address | string | null) => Observable<DeriveAccountFlags> {
  return memo(instanceId, (address?: AccountId | Address | string | null): Observable<DeriveAccountFlags> =>
    api.derive.accounts._flags().pipe(
      map((r) => parseFlags(address, r))
    )
  );
}
