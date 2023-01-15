// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataV3, ContractMetadataV4 } from 'https://deno.land/x/polkadot@0.2.22/types/interfaces/index.ts';
import type { Registry } from 'https://deno.land/x/polkadot@0.2.22/types/types/index.ts';

export function v3ToV4 (registry: Registry, v3: ContractMetadataV3): ContractMetadataV4 {
  return v3;
}
