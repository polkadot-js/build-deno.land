// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ILookup } from 'https://deno.land/x/polkadot@0.0.3/types-create/types/index.ts';
import type { SiLookupTypeId } from '../../interfaces/index.ts';

export function getSiName (lookup: ILookup, type: SiLookupTypeId): string {
  const typeDef = lookup.getTypeDef(type);

  return typeDef.lookupName || typeDef.type;
}
