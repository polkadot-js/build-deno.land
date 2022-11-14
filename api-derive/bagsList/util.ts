// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { QueryableStorage } from 'https://deno.land/x/polkadot@0.2.15/api-base/types/index.ts';
import type { DeriveApi } from '../types.ts';

export function getQueryInterface (api: DeriveApi): QueryableStorage<'rxjs'>['voterBagsList'] {
  return (
    // latest substrate (latest always first)
    api.query.voterBagsList ||
    // previous substrate
    api.query.bagsList ||
    // latest polkadot
    api.query.voterList
  );
}
