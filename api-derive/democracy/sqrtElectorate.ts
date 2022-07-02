// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { BN } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import type { DeriveApi } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.5.5';

import { bnSqrt } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

import { memo } from '../util/index.ts';

export function sqrtElectorate (instanceId: string, api: DeriveApi): () => Observable<BN> {
  return memo(instanceId, (): Observable<BN> =>
    api.query.balances.totalIssuance().pipe(
      map(bnSqrt)
    )
  );
}
