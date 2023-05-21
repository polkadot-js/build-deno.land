
import 'https://deno.land/x/polkadot@0.2.40/types-codec/types/registry.ts';

import type { Codec, CodecClass, ICompact, INumber, LookupString } from 'https://deno.land/x/polkadot@0.2.40/types-codec/types/index.ts';
import type { ILookup, TypeDef } from 'https://deno.land/x/polkadot@0.2.40/types-create/types/index.ts';

declare module 'https://deno.land/x/polkadot@0.2.40/types-codec/types/registry.ts' {
  interface Registry {
    readonly lookup: ILookup;

    createLookupType (lookupId: ICompact<INumber> | number): LookupString;
    getUnsafe <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<T> | undefined;
    setLookup (lookup: ILookup): void;
  }
}
