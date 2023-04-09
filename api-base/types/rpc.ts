
import type { Observable } from 'https://esm.sh/rxjs@7.8.0';
import type { AnyFunction, AnyJson, Callback, DefinitionRpc } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { ApiTypes, PromiseResult, Push, RxResult, UnsubscribePromise } from './base.ts';

export type { AugmentedRpc } from 'https://deno.land/x/polkadot/rpc-core/types/index.ts';

export interface RxRpcResult<F extends AnyFunction> extends RxResult<F> {
  raw <T> (...args: Parameters<F>): Observable<T>;
  meta: DefinitionRpc;
}

export interface PromiseRpcResult<F extends AnyFunction> extends PromiseResult<F> {
  raw <T> (...args: Parameters<F>): Promise<T>;
  raw <T> (...args: Push<Parameters<F>, Callback<T>>): UnsubscribePromise;
  meta: DefinitionRpc;
}

export type RpcMethodResult<ApiType extends ApiTypes, F extends AnyFunction> = ApiType extends 'rxjs'
  ? RxRpcResult<F>
  : PromiseRpcResult<F>;

export type DecoratedRpcSection<ApiType extends ApiTypes, Section> = {
  [M in keyof Section]: Section[M] extends AnyFunction
    ? RpcMethodResult<ApiType, Section[M]>
    : never
}

export type RawRpcType<ApiType extends ApiTypes> = (method: string, ...params: unknown[]) => ApiType extends 'rxjs' ? Observable<AnyJson> : Promise<AnyJson>;

export type DecoratedRpc<ApiType extends ApiTypes, AllSections> = {
  [S in keyof AllSections]: DecoratedRpcSection<ApiType, AllSections[S]>
} & RawRpcType<ApiType>
