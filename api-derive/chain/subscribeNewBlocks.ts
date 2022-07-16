// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.6';
import type { SignedBlockExtended } from '../type/types.ts';
import type { DeriveApi } from '../types.ts';

import { switchMap } from 'https://esm.sh/rxjs@7.5.6';

import { memo } from '../util/index.ts';

/**
 * @name subscribeNewBlocks
 * @returns The latest block & events for that block
 */
export function subscribeNewBlocks (instanceId: string, api: DeriveApi): () => Observable<SignedBlockExtended> {
  return memo(instanceId, (): Observable<SignedBlockExtended> =>
    api.derive.chain.subscribeNewHeads().pipe(
      switchMap((header) =>
        api.derive.chain.getBlock(header.createdAtHash || header.hash)
      )
    )
  );
}
