// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.6';
import type { AnyNumber } from 'https://deno.land/x/polkadot@0.0.9/types/types/index.ts';
import type { SignedBlockExtended } from '../type/types.ts';
import type { DeriveApi } from '../types.ts';

import { switchMap } from 'https://esm.sh/rxjs@7.5.6';

import { memo } from '../util/index.ts';

export function getBlockByNumber (instanceId: string, api: DeriveApi): (blockNumber: AnyNumber) => Observable<SignedBlockExtended> {
  return memo(instanceId, (blockNumber: AnyNumber): Observable<SignedBlockExtended> =>
    api.rpc.chain.getBlockHash(blockNumber).pipe(
      switchMap((h) => api.derive.chain.getBlock(h))
    )
  );
}
