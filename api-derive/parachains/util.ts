// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ParaId } from 'https://deno.land/x/polkadot@0.2.22/types/interfaces/index.ts';
import type { DidUpdate } from './types.ts';

export function didUpdateToBool (didUpdate: DidUpdate, id: ParaId): boolean {
  return didUpdate.isSome
    ? didUpdate.unwrap().some((paraId) => paraId.eq(id))
    : false;
}
