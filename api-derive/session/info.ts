
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { DeriveApi, DeriveSessionInfo } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.8.1';

import { objectSpread } from 'https://deno.land/x/polkadot@0.2.44/util/mod.ts';

import { memo } from '../util/index.ts';

/**
 * @description Retrieves all the session and era query and calculates specific values on it as the length of the session and eras
 */
export function info (instanceId: string, api: DeriveApi): () => Observable<DeriveSessionInfo> {
  return memo(instanceId, (): Observable<DeriveSessionInfo> =>
    api.derive.session.indexes().pipe(
      map((indexes) => {
        const sessionLength = api.consts?.babe?.epochDuration || api.registry.createType('u64', 1);
        const sessionsPerEra = api.consts?.staking?.sessionsPerEra || api.registry.createType('SessionIndex', 1);

        return objectSpread({
          eraLength: api.registry.createType('BlockNumber', sessionsPerEra.mul(sessionLength)),
          isEpoch: !!api.query.babe,
          sessionLength,
          sessionsPerEra
        }, indexes);
      })
    )
  );
}
