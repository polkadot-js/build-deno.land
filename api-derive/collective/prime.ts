// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { AccountId } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { DeriveApi } from '../types.ts';
import type { Collective } from './types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.5.5';

import { isFunction } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

import { withSection } from './helpers.ts';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { AccountId } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';

export function prime (section: Collective): (instanceId: string, api: DeriveApi) => () => Observable<AccountId | null> {
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
