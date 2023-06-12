
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { AnyFunction, Codec, DefinitionCallNamed } from 'https://deno.land/x/polkadot@0.2.41/types/types/index.ts';
import type { ApiTypes, EmptyBase, ReturnCodec } from './base.ts';

export type DecoratedCallBase<ApiType extends ApiTypes, F extends AnyFunction = (...args: any[]) => Observable<Codec>> =
  ApiType extends 'rxjs'
    ? <T extends Codec | any = ReturnCodec<F>> (...args: Parameters<F>) => Observable<T>
    : <T extends Codec | any = ReturnCodec<F>> (...args: Parameters<F>) => Promise<T>;

export type AugmentedCall<ApiType extends ApiTypes, F extends AnyFunction = (...args: any[]) => Observable<Codec>> = DecoratedCallBase<ApiType, F> & {
  /** The metadata/description/definition for this method */
  meta: DefinitionCallNamed
};


export interface AugmentedCalls<ApiType extends ApiTypes> extends EmptyBase<ApiType> {
  // augmented
}

export interface QueryableCalls<ApiType extends ApiTypes> extends AugmentedCalls<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: QueryableModuleCalls<ApiType>;
}

export interface QueryableModuleCalls<ApiType extends ApiTypes> {
  [key: string]: DecoratedCallBase<ApiType>;
}
