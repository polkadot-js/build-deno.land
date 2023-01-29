// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise, WsProvider } from 'https://deno.land/x/polkadot@0.2.24/api/mod.ts';
import { Metadata, TypeRegistry } from 'https://deno.land/x/polkadot@0.2.24/types/mod.ts';
import metaStatic from 'https://deno.land/x/polkadot@0.2.24/types-support/metadata/static-substrate.ts';

export function createApiWithAugmentations (): ApiPromise {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, metaStatic);

  registry.setMetadata(metadata);

  const api = new ApiPromise({
    provider: new WsProvider('ws://', false),
    registry
  });

  // eslint-disable-next-line deprecation/deprecation
  api.injectMetadata(metadata, true, registry);

  return api;
}
