
import type { ExactDerive } from 'https://deno.land/x/polkadot@0.2.43/api-derive/mod.ts';
import type { AnyFunction } from 'https://deno.land/x/polkadot@0.2.43/types/types/index.ts';
import type { ApiTypes, DecorateMethod, MethodResult } from '../types/index.ts';

import { lazyDeriveSection } from 'https://deno.land/x/polkadot@0.2.43/api-derive/mod.ts';

type AnyDeriveSection = Record<string, AnyFunction>;

type AnyDerive = Record<string, AnyDeriveSection>;

type DeriveSection<ApiType extends ApiTypes, Section extends AnyDeriveSection> = {
  [M in keyof Section]: MethodResult<ApiType, Section[M]>
};

export type AllDerives<ApiType extends ApiTypes> = {
  [S in keyof ExactDerive]: DeriveSection<ApiType, ExactDerive[S]>
};

/**
 * This is a section decorator which keeps all type information.
 */
export function decorateDeriveSections<ApiType extends ApiTypes> (decorateMethod: DecorateMethod<ApiType>, derives: AnyDerive): AllDerives<ApiType> {
  const getKeys = (s: string) =>
    Object.keys(derives[s]);

  const creator = (s: string, m: string) =>
    decorateMethod(derives[s][m]) as AnyFunction;

  const result: AnyDerive = {};
  const names = Object.keys(derives);

  for (let i = 0, count = names.length; i < count; i++) {
    lazyDeriveSection(result, names[i], getKeys, creator);
  }

  return result as AllDerives<ApiType>;
}
