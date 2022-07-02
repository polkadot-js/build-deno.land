// Copyright 2017-2022 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletConstantMetadataLatest } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { Codec } from 'https://deno.land/x/polkadot@0.0.2/types/types/index.ts';
import type { ApiTypes } from './base.ts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
export interface AugmentedConsts<ApiType extends ApiTypes> {
  // augmented
}

export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
  // when non-augmented, we need to at least have Codec results
  [key: string]: QueryableModuleConsts;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface AugmentedConst<ApiType extends ApiTypes> {
  meta: PalletConstantMetadataLatest;
}

export interface QueryableModuleConsts {
  [key: string]: Codec;
}
