// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataV2, ContractMetadataV3 } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { Registry } from 'https://deno.land/x/polkadot@0.0.2/types/types/index.ts';

import { objectSpread } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

export function v2ToV3 (registry: Registry, v2: ContractMetadataV2): ContractMetadataV3 {
  return registry.createType('ContractMetadataV3', objectSpread({}, v2, {
    spec: objectSpread({}, v2.spec, {
      constructors: v2.spec.constructors.map((c) =>
        // V3 introduces the payable flag on constructors, for <V3, it is always true
        registry.createType('ContractConstructorSpecV3', objectSpread({}, c, { payable: true }))
      )
    })
  }));
}
