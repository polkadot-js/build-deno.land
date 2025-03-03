
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Option, u32 } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { AccountId } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { Codec } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { DeriveApi, DeriveHeartbeats } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { BN_ZERO } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';

type Result = [DeriveHeartbeats, AccountId[], Option<Codec>[], u32[]];

function mapResult ([result, validators, heartbeats, numBlocks]: Result): DeriveHeartbeats {
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
 * @name receivedHeartbeats
 * @description Return a boolean array indicating whether the passed accounts had received heartbeats in the current session.
 * @example
 * ```javascript
 * let unsub = await api.derive.imOnline.receivedHeartbeats((heartbeat) => {
 *   console.log(heartbeat);
 * });
 * ```
 */
export function receivedHeartbeats (instanceId: string, api: DeriveApi): () => Observable<DeriveHeartbeats> {
  return memo(instanceId, (): Observable<DeriveHeartbeats> =>
    api.query.imOnline?.receivedHeartbeats
      ? api.derive.staking.overview().pipe(
        switchMap(({ currentIndex, validators }): Observable<Result> =>
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
