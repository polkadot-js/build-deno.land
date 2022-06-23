// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from 'https://deno.land/x/polkadot@0.0.0-8/types/mod.ts';
import type { RuntimeVersionPartial } from 'https://deno.land/x/polkadot@0.0.0-8/types/interfaces.ts';
import type { DecoratedMeta } from 'https://deno.land/x/polkadot@0.0.0-8/types/metadata/decorate/types.ts';
import type { Registry } from 'https://deno.land/x/polkadot@0.0.0-8/types/types.ts';
import type { ApiDecoration, ApiTypes } from '../types/index.ts';

export interface VersionedRegistry<ApiType extends ApiTypes> {
  decoratedApi?: ApiDecoration<ApiType>;
  decoratedMeta?: DecoratedMeta;
  isDefault?: boolean;
  lastBlockHash?: Uint8Array | null;
  metadata: Metadata;
  registry: Registry;
  runtimeVersion: RuntimeVersionPartial;
}
