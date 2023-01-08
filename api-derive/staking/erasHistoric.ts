// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { u32 } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { EraIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { BN } from 'https://deno.land/x/polkadot/util/mod.ts';
import type { DeriveApi } from '../types.ts';

import { combineLatest, map, of } from 'https://esm.sh/rxjs@7.8.0';

import { BN_ONE, BN_ZERO } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';

export function erasHistoric (instanceId: string, api: DeriveApi): (withActive?: boolean) => Observable<EraIndex[]> {
  return memo(instanceId, (withActive?: boolean): Observable<EraIndex[]> =>
    combineLatest([
      api.query.staking.activeEra(),
      api.consts.staking.historyDepth
        ? of(api.consts.staking.historyDepth)
        : api.query.staking.historyDepth<u32>()
    ]).pipe(
      map(([activeEraOpt, historyDepth]): EraIndex[] => {
        const result: EraIndex[] = [];
        const max = historyDepth.toNumber();
        const activeEra: BN = activeEraOpt.unwrapOrDefault().index;
        let lastEra = activeEra;

        while (lastEra.gte(BN_ZERO) && (result.length < max)) {
          if ((lastEra !== activeEra) || (withActive === true)) {
            result.push(api.registry.createType('EraIndex', lastEra));
          }

          lastEra = lastEra.sub(BN_ONE);
        }

        // go from oldest to newest
        return result.reverse();
      })
    )
  );
}
