// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from 'https://deno.land/x/polkadot@0.0.2/types-codec/types/index.ts';
import type { MetadataV12, MetadataV13 } from '../../interfaces/metadata/index.ts';

/**
 * @internal
 **/
export function toV13 (registry: Registry, metadata: MetadataV12): MetadataV13 {
  return registry.createTypeUnsafe('MetadataV13', [metadata]);
}
