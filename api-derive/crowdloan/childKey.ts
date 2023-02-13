
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { Option, u32 } from 'https://deno.land/x/polkadot@0.2.27/types/mod.ts';
import type { PolkadotRuntimeCommonCrowdloanFundInfo } from 'https://deno.land/x/polkadot@0.2.27/types/lookup.ts';
import type { BN } from 'https://deno.land/x/polkadot@0.2.27/util/mod.ts';
import type { DeriveApi } from '../types.ts';

import { map } from 'https://esm.sh/rxjs@7.8.0';

import { u8aConcat, u8aToHex } from 'https://deno.land/x/polkadot@0.2.27/util/mod.ts';
import { blake2AsU8a } from 'https://deno.land/x/polkadot@0.2.27/util-crypto/mod.ts';

import { memo } from '../util/index.ts';

interface AllInfo extends PolkadotRuntimeCommonCrowdloanFundInfo {
  // previously it was named trieIndex
  trieIndex?: u32;
}

function createChildKey (info: AllInfo): string {
  return u8aToHex(
    u8aConcat(
      ':child_storage:default:',
      blake2AsU8a(
        u8aConcat(
          'crowdloan',
          (info.fundIndex || info.trieIndex).toU8a()
        )
      )
    )
  );
}

export function childKey (instanceId: string, api: DeriveApi): (paraId: string | number | BN) => Observable<string | null> {
  return memo(instanceId, (paraId: string | number | BN): Observable<string | null> =>
    api.query.crowdloan.funds<Option<PolkadotRuntimeCommonCrowdloanFundInfo>>(paraId).pipe(
      map((optInfo) =>
        optInfo.isSome
          ? createChildKey(optInfo.unwrap())
          : null
      )
    )
  );
}
