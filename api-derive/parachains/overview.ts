
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { ParaId } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi, DeriveParachain, DeriveParachainInfo } from '../types.ts';
import type { DidUpdate, ParaInfoResult, PendingSwap, RelayDispatchQueueSize } from './types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { objectSpread } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';
import { didUpdateToBool } from './util.ts';

type Result = [
  ParaId[],
  DidUpdate,
  RelayDispatchQueueSize[],
  ParaInfoResult[],
  PendingSwap[]
];

function parse ([ids, didUpdate, relayDispatchQueueSizes, infos, pendingSwaps]: Result): DeriveParachain[] {
  return ids.map((id, index): DeriveParachain => ({
    didUpdate: didUpdateToBool(didUpdate, id),
    id,
    info: objectSpread<DeriveParachainInfo>({ id }, infos[index].unwrapOr(null)),
    pendingSwapId: pendingSwaps[index].unwrapOr(null),
    relayDispatchQueueSize: relayDispatchQueueSizes[index][0].toNumber()
  }));
}

/**
 * @name overview
 * @description Retrieves an overview of all registered parachains.
 * @example
 * ```javascript
 * await api.derive.parachains.overview((overview) => {
 *   parachains.forEach(parachain => {
 *     console.log(`Parachain ${parachain.id.toString()} is registered.`);
 *   });
 * });
 * ```
 */
export function overview (instanceId: string, api: DeriveApi): () => Observable<DeriveParachain[]> {
  return memo(instanceId, (): Observable<DeriveParachain[]> =>
    api.query['registrar']?.['parachains'] && api.query['parachains']
      ? api.query['registrar']['parachains']<ParaId[]>().pipe(
        switchMap((paraIds) =>
          combineLatest([
            of(paraIds),
            api.query['parachains']['didUpdate']<DidUpdate>(),
            api.query['parachains']['relayDispatchQueueSize'].multi<RelayDispatchQueueSize>(paraIds),
            api.query['registrar']['paras'].multi<ParaInfoResult>(paraIds),
            api.query['registrar']['pendingSwap'].multi<PendingSwap>(paraIds)
          ])
        ),
        map(parse)
      )
      : of([] as DeriveParachain[])
  );
}
