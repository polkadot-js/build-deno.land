// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { Compact } from 'https://deno.land/x/polkadot@0.0.3/types/mod.ts';
import type { BlockNumber } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { DeriveApi } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.5.5';

import { memo } from '../util/index.ts';

// re-export these - since these needs to be resolvable from api-derive, i.e. without this
// we would emit code with ../<somewhere>/src embedded in the *.d.ts files
export type { BlockNumber } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';

export function unwrapBlockNumber <T extends { number: Compact<BlockNumber> }> (fn: (api: DeriveApi) => Observable<T>): (instanceId: string, api: DeriveApi) => () => Observable<BlockNumber> {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, () => fn(api).pipe(
      map((r) => r.number.unwrap())
    ));
}
