// Copyright 2017-2022 @polkadot/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option, Text } from 'https://deno.land/x/polkadot@0.0.3/types-codec/mod.ts';
import type { ICompact, INumber } from 'https://deno.land/x/polkadot@0.0.3/types-codec/types/index.ts';
import type { TypeDef } from './types.ts';

export interface ILookup {
  getSiType (lookupId: ICompact<INumber> | string | number): {
    def: {
      asTuple: ICompact<INumber>[]
    }
  },
  getTypeDef (lookupId: ICompact<INumber> | string | number): TypeDef;
  sanitizeField (name: Option<Text>): [string | null, string | null];
}
