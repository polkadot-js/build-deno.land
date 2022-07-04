// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { Option, u32, WrapperOpaque } from 'https://deno.land/x/polkadot@0.0.3/types/mod.ts';
import type { AccountId } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { PalletImOnlineBoundedOpaqueNetworkState } from 'https://deno.land/x/polkadot@0.0.3/types/lookup.ts';
import type { DeriveApi, DeriveHeartbeats } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.5.5';

import { BN_ZERO } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import { memo } from '../util/index.ts';

type HeartbeatsOpt = Option<WrapperOpaque<PalletImOnlineBoundedOpaqueNetworkState>>;

function mapResult ([result, validators, heartbeats, numBlocks]: [DeriveHeartbeats, AccountId[], HeartbeatsOpt[], u32[]]): DeriveHeartbeats {
  validators.forEach((validator, index): void => {
    const validatorId = validator.toString();
    const blockCount = numBlocks[index];
    const hasMessage = !heartbeats[index].isEmpty;
    const prev = result[validatorId];

    if (!prev || prev.hasMessage !== hasMessage || !prev.blockCount.eq(blockCount)) {
      result[validatorId] = {
        blockCount,
        hasMessage,
        isOnline: hasMessage || blockCount.gt(BN_ZERO)
      };
    }
  });

  return result;
}

/**
 * @description Return a boolean array indicating whether the passed accounts had received heartbeats in the current session
 */
export function receivedHeartbeats (instanceId: string, api: DeriveApi): () => Observable<DeriveHeartbeats> {
  return memo(instanceId, (): Observable<DeriveHeartbeats> =>
    api.query.imOnline?.receivedHeartbeats
      ? api.derive.staking.overview().pipe(
        switchMap(({ currentIndex, validators }): Observable<[DeriveHeartbeats, AccountId[], HeartbeatsOpt[], u32[]]> =>
          combineLatest([
            of({}),
            of(validators),
            api.query.imOnline.receivedHeartbeats.multi(
              validators.map((_address, index) => [currentIndex, index])),
            api.query.imOnline.authoredBlocks.multi(
              validators.map((address) => [currentIndex, address]))
          ])
        ),
        map(mapResult)
      )
      : of({})
  );
}
