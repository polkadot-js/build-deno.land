
import 'https://deno.land/x/polkadot@0.2.45/types-codec/types/registry.ts';
import 'https://deno.land/x/polkadot@0.2.45/types-create/types/augmentRegistry.ts';

import type { AnyString, Codec, CodecClass, LookupString } from 'https://deno.land/x/polkadot@0.2.45/types-codec/types/index.ts';
import type { TypeDef } from 'https://deno.land/x/polkadot@0.2.45/types-create/types/index.ts';
import type { ExtDef } from '../extrinsic/signedExtensions/types.ts';
import type { MetadataLatest } from '../interfaces/metadata/index.ts';
import type { SiField, SiLookupTypeId } from '../interfaces/scaleInfo/index.ts';
import type { ChainProperties } from '../interfaces/system/index.ts';
import type { Metadata, PortableRegistry } from '../metadata/index.ts';
import type { CallFunction as CallFunctionExt } from './calls.ts';
import type { DetectCodec } from './detect.ts';
import type { CodecHasher, RegisteredTypes } from './registry.ts';

declare module 'https://deno.land/x/polkadot@0.2.45/types-codec/types/registry.ts' {
  interface RegistryError {
    fields: SiField[];
  }

  interface Registry {
    readonly firstCallIndex: Uint8Array;
    readonly knownTypes: RegisteredTypes;
    readonly metadata: MetadataLatest;
    readonly unknownTypes: string[];
    readonly signedExtensions: string[];

    findMetaCall (callIndex: Uint8Array): CallFunctionExt;

    clearCache (): void

    createLookupType (lookupId: SiLookupTypeId | number): LookupString;

    createClass <T extends Codec = Codec, K extends string = string> (type: K): CodecClass<DetectCodec<T, K>>;
    createType <T extends Codec = Codec, K extends string = string> (type: K, ...params: unknown[]): DetectCodec<T, K>;

    get <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<DetectCodec<T, K>> | undefined;
    getChainProperties (): ChainProperties | undefined;
    getDefinition (typeName: string): string | undefined;
    getModuleInstances (specName: AnyString, moduleName: string): string[] | undefined;

    setKnownTypes (types: RegisteredTypes): void;
    setChainProperties (properties?: ChainProperties): void;
    setHasher (hasher?: CodecHasher | null): void;
    setLookup (lookup: PortableRegistry): void;
    setMetadata (metadata: Metadata, signedExtensions?: string[], userExtensions?: ExtDef): void;
    setSignedExtensions (signedExtensions?: string[], userExtensions?: ExtDef): void;
  }
}
