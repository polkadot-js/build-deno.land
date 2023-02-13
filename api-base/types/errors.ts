
import type { IsError } from 'https://deno.land/x/polkadot/types/metadata/decorate/types.ts';
import type { ApiTypes } from './base.ts';

export type AugmentedError<ApiType extends ApiTypes> = IsError;


export interface AugmentedErrors<ApiType extends ApiTypes> {
  // augmented
}

export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: ModuleErrors<ApiType>;
}

export interface ModuleErrors<ApiType extends ApiTypes> {
  [key: string]: AugmentedError<ApiType>;
}
