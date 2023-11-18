
import type { PalletConstantMetadataLatest } from 'https://deno.land/x/polkadot@0.2.44/types/interfaces/index.ts';
import type { Codec } from 'https://deno.land/x/polkadot@0.2.44/types/types/index.ts';
import type { ApiTypes, EmptyBase } from './base.ts';

export interface AugmentedConst<_ extends ApiTypes> {
  meta: PalletConstantMetadataLatest;
}


export interface AugmentedConsts<ApiType extends ApiTypes> extends EmptyBase<ApiType> {
  // augmented
}

export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: QueryableModuleConsts;
}

export type QueryableModuleConsts = Record<string, Codec>;
