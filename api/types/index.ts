// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiTypes, DeriveCustom, QueryableStorageMulti } from 'https://deno.land/x/polkadot/api-base/types/index.ts';
import type { ApiInterfaceRx as ApiInterfaceBase } from 'https://deno.land/x/polkadot/api-base/types/api.ts';
import type { QueryableCalls } from 'https://deno.land/x/polkadot/api-base/types/calls.ts';
import type { QueryableConsts } from 'https://deno.land/x/polkadot/api-base/types/consts.ts';
import type { DecoratedErrors } from 'https://deno.land/x/polkadot/api-base/types/errors.ts';
import type { DecoratedEvents } from 'https://deno.land/x/polkadot/api-base/types/events.ts';
import type { QueryableStorage } from 'https://deno.land/x/polkadot/api-base/types/storage.ts';
import type { ProviderInterface, ProviderInterfaceEmitted } from 'https://deno.land/x/polkadot/rpc-provider/types.ts';
import type { ExtDef } from 'https://deno.land/x/polkadot/types/extrinsic/signedExtensions/types.ts';
import type { Call, Extrinsic, Hash, RuntimeVersionPartial } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { CallFunction, DefinitionRpc, DefinitionRpcSub, DefinitionsCall, RegisteredTypes, Registry, RegistryError, SignatureOptions, Signer } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { BN } from 'https://deno.land/x/polkadot/util/mod.ts';
import type { HexString } from 'https://deno.land/x/polkadot/util/types.ts';
import type { ApiBase } from '../base/index.ts';
import type { SubmittableExtrinsic } from '../types/submittable.ts';
import type { AllDerives } from '../util/decorate.ts';

export * from 'https://deno.land/x/polkadot/api-base/types/index.ts';
export * from 'https://deno.land/x/polkadot/api/types/calls.ts';
export * from 'https://deno.land/x/polkadot/api/types/consts.ts';
export * from 'https://deno.land/x/polkadot/api/types/errors.ts';
export * from 'https://deno.land/x/polkadot/api/types/events.ts';
export * from 'https://deno.land/x/polkadot/api/types/storage.ts';
export * from 'https://deno.land/x/polkadot/api/types/submittable.ts';

export type { Signer, SignerResult } from 'https://deno.land/x/polkadot/types/types/index.ts';

export { ApiBase } from '../base/index.ts';

// A smaller interface of ApiRx, used in derive and in SubmittableExtrinsic
export interface ApiInterfaceRx extends ApiInterfaceBase {
  derive: AllDerives<'rxjs'>;
}

export interface ApiOptions extends RegisteredTypes {
  /**
   * @description Add custom derives to be injected
   */
  derives?: DeriveCustom;
  /**
   * @description Control the initialization of the wasm libraries. When not specified, it defaults to `true`, initializing the wasm libraries, set to `false` to not initialize wasm. (No sr25519 support)
   */
  initWasm?: boolean;
  /**
   * @description pre-bundles is a map of 'genesis hash and runtime spec version' as key to a metadata hex string
   * if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain
   */
  metadata?: Record<string, HexString>;
  /**
   * @description Don't display any warnings on initialization (missing RPC methods & runtime calls)
   */
  noInitWarn?: boolean;
  /**
   * @description Transport Provider from rpc-provider. If not specified, it will default to
   * connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`
   */
  provider?: ProviderInterface;
  /**
   * @description A type registry to use along with this instance
   */
  registry?: Registry;
  /**
   * @description User-defined RPC methods
   */
  rpc?: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>;
  /**
   * @description Overrides for state_call usage (this will be removed in some future version)
   */
  runtime?: DefinitionsCall;
  /**
   * @description Any chain-specific signed extensions that are now well-known
   */
  signedExtensions?: ExtDef;
  /**
   * @description An external signer which will be used to sign extrinsic when account passed in is not KeyringPair
   */
  signer?: Signer;
  /**
   * @description The source object to use for runtime information (only used when cloning)
   */
  source?: ApiBase<any>;
  /**
   * @description Throws an error when the initial connection fails (same as isReadyOrError)
   */
  throwOnConnect?: boolean;
  /**
   * @description Throws an error when some types are unknown (useful with throwOnConnect)
   */
  throwOnUnknown?: boolean;
}

export type ApiInterfaceEvents = ProviderInterfaceEmitted | 'ready' | 'decorated';

export interface SignerOptions extends SignatureOptions {
  blockNumber: BN;
  genesisHash: Hash;
}

export interface ApiDecoration<ApiType extends ApiTypes> {
  call: QueryableCalls<ApiType>;
  consts: QueryableConsts<ApiType>;
  errors: DecoratedErrors<ApiType>;
  events: DecoratedEvents<ApiType>;
  query: QueryableStorage<ApiType>;
  registry: Registry;
  runtimeVersion: RuntimeVersionPartial;
  rx: {
    call: QueryableCalls<'rxjs'>;
    query: QueryableStorage<'rxjs'>;
  };
  tx: (extrinsic: Call | Extrinsic | Uint8Array | string) => SubmittableExtrinsic<ApiType>;

  findCall (callIndex: Uint8Array | string): CallFunction;
  findError (errorIndex: Uint8Array | string): RegistryError;
  queryMulti: QueryableStorageMulti<ApiType>;
}
