
import 'https://deno.land/x/polkadot@0.2.39/types-create/types/lookup.ts';

import type { Vec } from 'https://deno.land/x/polkadot@0.2.39/types-codec/mod.ts';
import type { LookupString } from 'https://deno.land/x/polkadot@0.2.39/types-codec/types/index.ts';
import type { TypeDef } from 'https://deno.land/x/polkadot@0.2.39/types-create/types/index.ts';
import type { PortableType } from '../interfaces/metadata/index.ts';
import type { SiLookupTypeId, SiType } from '../interfaces/scaleInfo/index.ts';

declare module 'https://deno.land/x/polkadot@0.2.39/types-create/types/lookup.ts' {
  interface ILookup {
    readonly names: string[];
    readonly types: Vec<PortableType>;

    getName (lookupId: SiLookupTypeId | LookupString | number): string | undefined;
    getSiType (lookupId: SiLookupTypeId | LookupString | number): SiType;
    getTypeDef (lookupId: SiLookupTypeId | LookupString | number): TypeDef;
  }
}
