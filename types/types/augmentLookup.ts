// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import 'https://deno.land/x/polkadot@0.2.24/types-create/types/lookup.ts';

import type { Vec } from 'https://deno.land/x/polkadot@0.2.24/types-codec/mod.ts';
import type { LookupString } from 'https://deno.land/x/polkadot@0.2.24/types-codec/types/index.ts';
import type { TypeDef } from 'https://deno.land/x/polkadot@0.2.24/types-create/types/index.ts';
import type { PortableType } from '../interfaces/metadata/index.ts';
import type { SiLookupTypeId, SiType } from '../interfaces/scaleInfo/index.ts';

declare module 'https://deno.land/x/polkadot@0.2.24/types-create/types/lookup.ts' {
  interface ILookup {
    readonly names: string[];
    readonly types: Vec<PortableType>;

    getName (lookupId: SiLookupTypeId | LookupString | number): string | undefined;
    getSiType (lookupId: SiLookupTypeId | LookupString | number): SiType;
    getTypeDef (lookupId: SiLookupTypeId | LookupString | number): TypeDef;
  }
}
