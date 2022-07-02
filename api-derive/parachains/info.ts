// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { CollatorId, ParaId } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { DeriveApi, DeriveParachainActive, DeriveParachainFull, DeriveParachainInfo } from '../types.ts';
import type { Active, DidUpdate, Heads, ParaInfoResult, PendingSwap, RelayDispatchQueue, RetryQueue, SelectedThreads } from './types.ts';

import { map, of } from 'https://esm.sh/rxjs@7.5.5';

import { memo } from '../util/index.ts';
import { didUpdateToBool } from './util.ts';

type Result = [
  Active,
  RetryQueue,
  SelectedThreads,
  DidUpdate,
  ParaInfoResult,
  PendingSwap,
  Heads,
  RelayDispatchQueue
];

function parseActive (id: ParaId, active: Active): DeriveParachainActive | null {
  const found = active.find(([paraId]) => paraId === id);

  if (found && found[1].isSome) {
    const [collatorId, retriable] = found[1].unwrap();

    return {
      collatorId,
      ...(
        retriable.isWithRetries
          ? {
            isRetriable: true,
            retries: retriable.asWithRetries.toNumber()
          }
          : {
            isRetriable: false,
            retries: 0
          }
      )
    };
  }

  return null;
}

function parseCollators (id: ParaId, collatorQueue: SelectedThreads | RetryQueue): (CollatorId | null)[] {
  return collatorQueue.map((queue): CollatorId | null => {
    const found = queue.find(([paraId]) => paraId === id);

    return found ? found[1] : null;
  });
}

function parse (id: ParaId, [active, retryQueue, selectedThreads, didUpdate, info, pendingSwap, heads, relayDispatchQueue]: Result): DeriveParachainFull | null {
  if (info.isNone) {
    return null;
  }

  return {
    active: parseActive(id, active),
    didUpdate: didUpdateToBool(didUpdate, id),
    heads,
    id,
    info: { id, ...info.unwrap() } as DeriveParachainInfo,
    pendingSwapId: pendingSwap.unwrapOr(null),
    relayDispatchQueue,
    retryCollators: parseCollators(id, retryQueue),
    selectedCollators: parseCollators(id, selectedThreads)
  };
}

export function info (instanceId: string, api: DeriveApi): (id: ParaId | number) => Observable<DeriveParachainFull | null> {
  return memo(instanceId, (id: ParaId | number): Observable<DeriveParachainFull | null> =>
    api.query.registrar && api.query.parachains
      ? api.queryMulti<Result>([
        api.query.registrar.active,
        api.query.registrar.retryQueue,
        api.query.registrar.selectedThreads,
        api.query.parachains.didUpdate,
        [api.query.registrar.paras, id],
        [api.query.registrar.pendingSwap, id],
        [api.query.parachains.heads, id],
        [api.query.parachains.relayDispatchQueue, id]
      ])
        .pipe(
          map((result: Result): DeriveParachainFull | null =>
            parse(api.registry.createType('ParaId', id), result)
          )
        )
      : of(null)
  );
}
