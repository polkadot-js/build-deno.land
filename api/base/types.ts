// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { RuntimeVersionPartial } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { DecoratedMeta } from 'https://deno.land/x/polkadot/types/metadata/decorate/types.ts';
import type { Registry } from 'https://deno.land/x/polkadot/types/types/index.ts';
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
