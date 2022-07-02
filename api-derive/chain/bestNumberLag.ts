// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { BlockNumber } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { DeriveApi } from '../types.ts';

import { combineLatest, map } from 'https://esm.sh/rxjs@7.5.5';

import { memo } from '../util/index.ts';

/**
 * @name bestNumberLag
 * @returns A number of blocks
 * @description Calculates the lag between finalized head and best head
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.bestNumberLag((lag) => {
 *   console.log(`finalized is ${lag} blocks behind head`);
 * });
 * ```
 */
export function bestNumberLag (instanceId: string, api: DeriveApi): () => Observable<BlockNumber> {
  return memo(instanceId, (): Observable<BlockNumber> =>
    combineLatest([
      api.derive.chain.bestNumber(),
      api.derive.chain.bestNumberFinalized()
    ]).pipe(
      map(([bestNumber, bestNumberFinalized]): BlockNumber =>
        api.registry.createType('BlockNumber', bestNumber.sub(bestNumberFinalized))
      )
    ));
}
