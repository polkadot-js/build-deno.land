// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { DeriveApi } from '../types.ts';
import type { Collective } from './types.ts';

import { of } from 'https://esm.sh/rxjs@7.5.5';

import { isFunction } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

import { memo } from '../util/index.ts';

export function getInstance (api: DeriveApi, section: string): DeriveApi['query']['council'] {
  const instances = api.registry.getModuleInstances(api.runtimeVersion.specName.toString(), section);
  const name = instances && instances.length
    ? instances[0]
    : section;

  return api.query[name as 'council'];
}

export function withSection <T, F extends (...args: any[]) => Observable<T>> (section: Collective, fn: (query: DeriveApi['query']['council'], api: DeriveApi, instanceId: string) => F): (instanceId: string, api: DeriveApi) => F {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, fn(getInstance(api, section), api, instanceId)) as unknown as F;
}

export function callMethod <T> (method: 'members' | 'proposals' | 'proposalCount', empty: T): (section: Collective) => (instanceId: string, api: DeriveApi) => () => Observable<T> {
  return (section: Collective) =>
    withSection(section, (query) =>
      (): Observable<T> =>
        isFunction(query?.[method])
          ? query[method]() as unknown as Observable<T>
          : of(empty)
    );
}
