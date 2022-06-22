// Copyright 2017-2022 @polkadot/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, ICompact, INumber } from 'https://deno.land/x/polkadot@0.0.0-5/types-codec/types.ts';
import type { ILookup, TypeDef } from 'https://deno.land/x/polkadot@0.0.0-5/types-create/types.ts';

declare module '@polkadot/types-codec/types/registry' {
  export interface Registry {
    readonly lookup: ILookup;

    createLookupType (lookupId: ICompact<INumber> | number): string;
    setLookup (lookup: ILookup): void;

    getUnsafe <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<T> | undefined;
  }
}
