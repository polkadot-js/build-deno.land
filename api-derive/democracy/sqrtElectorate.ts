
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { BN } from 'https://deno.land/x/polkadot/util/mod.ts';
import type { DeriveApi } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.8.1';

import { bnSqrt } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';

export function sqrtElectorate (instanceId: string, api: DeriveApi): () => Observable<BN> {
  return memo(instanceId, (): Observable<BN> =>
    api.query.balances.totalIssuance().pipe(
      map(bnSqrt)
    )
  );
}
