// Copyright 2017-2022 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { DecoratedRpc, QueryableConsts, QueryableStorage, QueryableStorageMulti, SubmittableExtrinsics } from 'https://deno.land/x/polkadot@0.0.2/api-base/types/index.ts';
import type { RpcInterface } from 'https://deno.land/x/polkadot@0.0.2/rpc-core/types/index.ts';
import type { Metadata } from 'https://deno.land/x/polkadot@0.0.2/types/mod.ts';
import type { Hash, RuntimeVersion } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { Registry, Signer } from 'https://deno.land/x/polkadot@0.0.2/types/types/index.ts';

// A smaller interface of ApiRx, used in derive and in SubmittableExtrinsic
export interface ApiInterfaceRx {
  consts: QueryableConsts<'rxjs'>;
  extrinsicType: number;
  genesisHash?: Hash;
  hasSubscriptions: boolean;
  registry: Registry;
  runtimeMetadata: Metadata;
  runtimeVersion: RuntimeVersion;
  query: QueryableStorage<'rxjs'>;
  queryAt: (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion) => Observable<QueryableStorage<'rxjs'>>;
  queryMulti: QueryableStorageMulti<'rxjs'>;
  rpc: DecoratedRpc<'rxjs', RpcInterface>;
  tx: SubmittableExtrinsics<'rxjs'>;
  signer?: Signer;
}
