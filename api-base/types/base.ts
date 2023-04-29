
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { AnyFunction, Callback, Codec } from 'https://deno.land/x/polkadot@0.2.37/types/types/index.ts';

export type Push<T extends readonly unknown[], V> = [...T, V]

export type DropLast<T extends readonly unknown[]> = T extends readonly [...infer U, any?] ? U : [...T];

export type ApiTypes = 'promise' | 'rxjs';

export type ObsInnerType<O extends Observable<any>> = O extends Observable<infer U> ? U : never;

export type VoidFn = () => void;

export type UnsubscribePromise = Promise<VoidFn>;

export type PromiseOrObs<ApiType extends ApiTypes, T> =
  ApiType extends 'rxjs'
    ? Observable<T>
    : Promise<T>;

export type MethodResult<ApiType extends ApiTypes, F extends AnyFunction> =
  ApiType extends 'rxjs'
    ? RxResult<F>
    : PromiseResult<F>;


export interface RxResult<F extends AnyFunction> {
  (...args: Parameters<F>): Observable<ObsInnerType<ReturnType<F>>>;
  <T>(...args: Parameters<F>): Observable<T>;
}

export interface PromiseResult<F extends AnyFunction> {
  (...args: Parameters<F>): Promise<ObsInnerType<ReturnType<F>>>;
  (...args: Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>): UnsubscribePromise;
  <T extends Codec | Codec[]>(...args: Parameters<F>): Promise<T>;
  <T extends Codec | Codec[]>(...args: Push<Parameters<F>, Callback<T>>): UnsubscribePromise;
}

export interface DecorateMethodOptions {
  methodName?: string;
  overrideNoSub?: (...args: unknown[]) => Observable<Codec>;
}

export type DecorateFn <T extends Codec> = (...args: any[]) => Observable<T>;

export interface PaginationOptions<A = unknown> {
  args: A[];
  pageSize: number;
  startKey?: string;
}

export type DecorateMethod<_ApiType extends ApiTypes, T = any> =
  <M extends (...args: any[]) => Observable<any>>(method: M, options?: DecorateMethodOptions) => T;

type AsCodec<R extends Codec | any> = R extends Codec
  ? R
  : Codec;

export type ReturnCodec<F extends AnyFunction> = AsCodec<ObsInnerType<ReturnType<F>>>;

export interface EmptyBase<_> {
  // this is use to allow use to have unused vars in augmented interfaces,
  // so intentionally left empty
}
