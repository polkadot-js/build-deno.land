
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { AccountId } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DeriveApi, DeriveStakingElected, StakingQueryFlags } from '../types.ts';

import { map, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { arrayFlatten } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';

const DEFAULT_FLAGS = { withController: true, withExposure: true, withPrefs: true };

function combineAccounts (nextElected: AccountId[], validators: AccountId[]): AccountId[] {
  return arrayFlatten([nextElected, validators.filter((v) => !nextElected.find((n) => n.eq(v)))]);
}

export function electedInfo (instanceId: string, api: DeriveApi): (flags?: StakingQueryFlags, page?: number) => Observable<DeriveStakingElected> {
  return memo(instanceId, (flags: StakingQueryFlags = DEFAULT_FLAGS, page = 0): Observable<DeriveStakingElected> =>
    api.derive.staking.validators().pipe(
      switchMap(({ nextElected, validators }): Observable<DeriveStakingElected> =>
        api.derive.staking.queryMulti(combineAccounts(nextElected, validators), flags, page).pipe(
          map((info): DeriveStakingElected => ({
            info,
            nextElected,
            validators
          }))
        )
      )
    )
  );
}
