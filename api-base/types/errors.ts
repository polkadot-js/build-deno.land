
import type { IsError } from 'https://deno.land/x/polkadot@0.2.35/types/metadata/decorate/types.ts';
import type { ApiTypes, EmptyBase } from './base.ts';

export type AugmentedError<_ extends ApiTypes> = IsError;


export interface AugmentedErrors<ApiType extends ApiTypes> extends EmptyBase<ApiType> {
  // augmented
}

export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: ModuleErrors<ApiType>;
}

export interface ModuleErrors<ApiType extends ApiTypes> {
  [key: string]: AugmentedError<ApiType>;
}
