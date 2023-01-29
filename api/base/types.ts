// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from 'https://deno.land/x/polkadot@0.2.24/types/mod.ts';
import type { RuntimeVersionPartial } from 'https://deno.land/x/polkadot@0.2.24/types/interfaces/index.ts';
import type { DecoratedMeta } from 'https://deno.land/x/polkadot@0.2.24/types/metadata/decorate/types.ts';
import type { Registry } from 'https://deno.land/x/polkadot@0.2.24/types/types/index.ts';
import type { ApiDecoration, ApiTypes } from '../types/index.ts';

export interface VersionedRegistry<ApiType extends ApiTypes> {
  counter: number;
  decoratedApi?: ApiDecoration<ApiType>;
  decoratedMeta?: DecoratedMeta;
  isDefault?: boolean;
  lastBlockHash?: Uint8Array | null;
  metadata: Metadata;
  registry: Registry;
  runtimeVersion: RuntimeVersionPartial;
}
