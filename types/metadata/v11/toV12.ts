// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from 'https://deno.land/x/polkadot@0.2.1/types-codec/types/index.ts';
import type { MetadataV11, MetadataV12, ModuleMetadataV12 } from '../../interfaces/metadata/index.ts';

import { objectSpread } from 'https://deno.land/x/polkadot@0.2.1/util/mod.ts';

/**
 * @internal
 **/
export function toV12 (registry: Registry, { extrinsic, modules }: MetadataV11): MetadataV12 {
  return registry.createTypeUnsafe('MetadataV12', [{
    extrinsic,
    modules: modules.map((mod): ModuleMetadataV12 =>
      registry.createTypeUnsafe('ModuleMetadataV12', [objectSpread({}, mod, { index: 255 })])
    )
  }]);
}
