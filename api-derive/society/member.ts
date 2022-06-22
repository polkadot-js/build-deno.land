// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://cdn.skypack.dev/rxjs@7.5.5';
import type { AccountId } from 'https://deno.land/x/polkadot/types/interfaces.ts';
import type { DeriveApi, DeriveSocietyMember } from '../types.ts';

import { map } from 'https://cdn.skypack.dev/rxjs@7.5.5';

import { memo } from '../util/index.ts';

/**
 * @description Get the member info for a society
 */
export function member (instanceId: string, api: DeriveApi): (accountId: AccountId) => Observable<DeriveSocietyMember> {
  return memo(instanceId, (accountId: AccountId): Observable<DeriveSocietyMember> =>
    api.derive.society._members([accountId]).pipe(
      map(([result]) => result)
    )
  );
}