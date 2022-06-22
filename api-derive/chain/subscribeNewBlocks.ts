// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://cdn.skypack.dev/rxjs@7.5.5';
import type { SignedBlockExtended } from '../type/types.ts';
import type { DeriveApi } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://cdn.skypack.dev/rxjs@7.5.5';

import { createSignedBlockExtended } from '../type/index.ts';
import { memo } from '../util/index.ts';

/**
 * @name subscribeNewBlocks
 * @returns The latest block & events for that block
 */
export function subscribeNewBlocks (instanceId: string, api: DeriveApi): () => Observable<SignedBlockExtended> {
  return memo(instanceId, (): Observable<SignedBlockExtended> =>
    api.derive.chain.subscribeNewHeads().pipe(
      switchMap((header) => {
        const blockHash = header.createdAtHash || header.hash;

        // we get the block first, setting up the registry
        return combineLatest([
          of(header),
          api.rpc.chain.getBlock(blockHash),
          api.queryAt(blockHash).pipe(
            switchMap((queryAt) =>
              queryAt.system.events()
            )
          )
        ]);
      }),
      map(([header, block, events]) =>
        createSignedBlockExtended(block.registry, block, events, header.validators)
      )
    )
  );
}