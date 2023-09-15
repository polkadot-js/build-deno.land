
import type { ContractMetadataV3, ContractMetadataV4 } from 'https://deno.land/x/polkadot@0.2.42/types/interfaces/index.ts';
import type { Registry } from 'https://deno.land/x/polkadot@0.2.42/types/types/index.ts';

import { objectSpread } from 'https://deno.land/x/polkadot@0.2.42/util/mod.ts';

export function v3ToV4 (registry: Registry, v3: ContractMetadataV3): ContractMetadataV4 {
  return registry.createType('ContractMetadataV4', objectSpread({}, v3, {
    spec: objectSpread({}, v3.spec, {
      constructors: v3.spec.constructors.map((c) =>
        registry.createType('ContractConstructorSpecV4', objectSpread({}, c))
      ),
      messages: v3.spec.messages.map((m) =>
        registry.createType('ContractMessageSpecV3', objectSpread({}, m))
      )
    })
  }));
}
