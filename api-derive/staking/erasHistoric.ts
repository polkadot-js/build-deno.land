// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { Option, u32 } from 'https://deno.land/x/polkadot@0.0.3/types/mod.ts';
import type { ActiveEraInfo, EraIndex } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { BN } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import type { DeriveApi } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.5.5';

import { BN_ONE, BN_ZERO } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import { memo } from '../util/index.ts';

export function erasHistoric (instanceId: string, api: DeriveApi): (withActive?: boolean) => Observable<EraIndex[]> {
  return memo(instanceId, (withActive?: boolean): Observable<EraIndex[]> =>
    api.queryMulti<[Option<ActiveEraInfo>, u32]>([
      api.query.staking.activeEra,
      api.query.staking.historyDepth
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
