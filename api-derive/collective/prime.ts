
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { AccountId } from 'https://deno.land/x/polkadot@0.2.35/types/interfaces/index.ts';
import type { Collective, PrimeFnRet } from './types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.8.0';

import { isFunction } from 'https://deno.land/x/polkadot@0.2.35/util/mod.ts';

import { withSection } from './helpers.ts';

export function prime (section: Collective): PrimeFnRet {
  return withSection(section, (query) =>
    (): Observable<AccountId | null> =>
      isFunction(query?.prime)
        ? query.prime().pipe(
          map((o): AccountId | null =>
            o.unwrapOr(null)
          )
        )
        : of(null)
  );
}
