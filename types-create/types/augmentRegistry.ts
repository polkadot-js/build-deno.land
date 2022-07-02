// Copyright 2017-2022 @polkadot/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, ICompact, INumber } from 'https://deno.land/x/polkadot@0.0.2/types-codec/types/index.ts';
import type { ILookup, TypeDef } from 'https://deno.land/x/polkadot@0.0.2/types-create/types/index.ts';

declare module 'https://deno.land/x/polkadot@0.0.2/types-codec/types/registry.ts' {
  export interface Registry {
    readonly lookup: ILookup;

    createLookupType (lookupId: ICompact<INumber> | number): string;
    setLookup (lookup: ILookup): void;

    getUnsafe <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<T> | undefined;
  }
}
