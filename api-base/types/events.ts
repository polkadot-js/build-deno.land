
import type { IsEvent } from 'https://deno.land/x/polkadot/types/metadata/decorate/types.ts';
import type { AnyTuple } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { ApiTypes, EmptyBase } from './base.ts';

export type AugmentedEvent<_ extends ApiTypes, T extends AnyTuple = AnyTuple, N = unknown> = IsEvent<T, N>;


export interface AugmentedEvents<ApiType extends ApiTypes> extends EmptyBase<ApiType> {
  // augmented
}

export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: ModuleEvents<ApiType>;
}

export type ModuleEvents<ApiType extends ApiTypes> = Record<string, AugmentedEvent<ApiType>>;
