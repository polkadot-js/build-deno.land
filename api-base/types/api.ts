
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { DecoratedRpc, QueryableCalls, QueryableConsts, QueryableStorage, QueryableStorageMulti, SubmittableExtrinsics } from 'https://deno.land/x/polkadot/api-base/types/index.ts';
import type { RpcInterface } from 'https://deno.land/x/polkadot/rpc-core/types/index.ts';
import type { Metadata } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { Hash, RuntimeVersion } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { Registry, Signer } from 'https://deno.land/x/polkadot/types/types/index.ts';

export interface ApiInterfaceRx {
  call: QueryableCalls<'rxjs'>;
  consts: QueryableConsts<'rxjs'>;
  extrinsicType: number;
  genesisHash?: Hash | undefined;
  hasSubscriptions: boolean;
  registry: Registry;
  runtimeMetadata: Metadata;
  runtimeVersion: RuntimeVersion;
  query: QueryableStorage<'rxjs'>;
  queryMulti: QueryableStorageMulti<'rxjs'>;
  rpc: DecoratedRpc<'rxjs', RpcInterface>;
  tx: SubmittableExtrinsics<'rxjs'>;
  signer?: Signer | undefined;

  callAt: (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion) => Observable<QueryableCalls<'rxjs'>>;
  queryAt: (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion) => Observable<QueryableStorage<'rxjs'>>;
}
