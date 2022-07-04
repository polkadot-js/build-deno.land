// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import 'https://deno.land/x/polkadot@0.0.3/types-create/types/augmentRegistry.ts';

import type { Codec, CodecClass } from 'https://deno.land/x/polkadot@0.0.3/types-codec/types/index.ts';
import type { TypeDef } from 'https://deno.land/x/polkadot@0.0.3/types-create/types/index.ts';
import type { ExtDef } from '../extrinsic/signedExtensions/types.ts';
import type { MetadataLatest } from '../interfaces/metadata/index.ts';
import type { SiField, SiLookupTypeId } from '../interfaces/scaleInfo/index.ts';
import type { ChainProperties } from '../interfaces/system/index.ts';
import type { Metadata, PortableRegistry } from '../metadata/index.ts';
import type { CallFunction as CallFunctionExt } from './calls.ts';
import type { DetectCodec } from './detect.ts';
import type { CodecHasher, RegisteredTypes } from './registry.ts';

declare module 'https://deno.land/x/polkadot@0.0.3/types-codec/types/registry.ts' {
  export interface RegistryError {
    fields: SiField[];
  }

  export interface Registry {
    readonly firstCallIndex: Uint8Array;
    readonly knownTypes: RegisteredTypes;
    readonly metadata: MetadataLatest;
    readonly unknownTypes: string[];
    readonly signedExtensions: string[];

    findMetaCall (callIndex: Uint8Array): CallFunctionExt;

    clearCache (): void

    createLookupType (lookupId: SiLookupTypeId | number): string;

    createClass <T extends Codec = Codec, K extends string = string> (type: K): CodecClass<DetectCodec<T, K>>;
    createType <T extends Codec = Codec, K extends string = string> (type: K, ...params: unknown[]): DetectCodec<T, K>;

    get <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<DetectCodec<T, K>> | undefined;
    getChainProperties (): ChainProperties | undefined;
    getDefinition (typeName: string): string | undefined;
    getModuleInstances (specName: string, moduleName: string): string[] | undefined;

    setKnownTypes (types: RegisteredTypes): void;
    setChainProperties (properties?: ChainProperties): void;
    setHasher (hasher?: CodecHasher | null): void;
    setLookup (lookup: PortableRegistry): void;
    setMetadata (metadata: Metadata, signedExtensions?: string[], userExtensions?: ExtDef): void;
    setSignedExtensions (signedExtensions?: string[], userExtensions?: ExtDef): void;
  }
}
