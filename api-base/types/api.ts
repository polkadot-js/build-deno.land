
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { DecoratedRpc, QueryableCalls, QueryableConsts, QueryableStorage, QueryableStorageMulti, SubmittableExtrinsics } from 'https://deno.land/x/polkadot@0.2.27/api-base/types/index.ts';
import type { RpcInterface } from 'https://deno.land/x/polkadot@0.2.27/rpc-core/types/index.ts';
import type { Metadata } from 'https://deno.land/x/polkadot@0.2.27/types/mod.ts';
import type { Hash, RuntimeVersion } from 'https://deno.land/x/polkadot@0.2.27/types/interfaces/index.ts';
import type { Registry, Signer } from 'https://deno.land/x/polkadot@0.2.27/types/types/index.ts';

export interface ApiInterfaceRx {
  call: QueryableCalls<'rxjs'>;
  consts: QueryableConsts<'rxjs'>;
  extrinsicType: number;
  genesisHash?: Hash;
  hasSubscriptions: boolean;
  registry: Registry;
  runtimeMetadata: Metadata;
  runtimeVersion: RuntimeVersion;
  query: QueryableStorage<'rxjs'>;
  queryMulti: QueryableStorageMulti<'rxjs'>;
  rpc: DecoratedRpc<'rxjs', RpcInterface>;
  tx: SubmittableExtrinsics<'rxjs'>;
  signer?: Signer;

  callAt: (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion) => Observable<QueryableCalls<'rxjs'>>;
  queryAt: (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion) => Observable<QueryableStorage<'rxjs'>>;
}
