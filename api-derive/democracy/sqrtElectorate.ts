
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { BN } from 'https://deno.land/x/polkadot/util/mod.ts';
import type { DeriveApi } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.8.1';

import { bnSqrt } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';

/**
 * @name sqrtElectorate
 * @description Computes the square root of the total token issuance in the network.
 * @example
 * ```javascript
 * let sqrtElectorate = await api.derive.democracy.sqrtElectorate();
 * console.log("Square root of token issuance:", sqrtElectorate);
 * ```
 */
export function sqrtElectorate (instanceId: string, api: DeriveApi): () => Observable<BN> {
  return memo(instanceId, (): Observable<BN> =>
    api.query.balances.totalIssuance().pipe(
      map(bnSqrt)
    )
  );
}
