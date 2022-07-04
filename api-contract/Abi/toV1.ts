// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataV0, ContractMetadataV1 } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { Registry } from 'https://deno.land/x/polkadot@0.0.3/types/types/index.ts';

import { convertSiV0toV1 } from 'https://deno.land/x/polkadot@0.0.3/types/mod.ts';
import { objectSpread } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

interface Named {
  name: unknown;
}

function v0ToV1Names (all: Named[]): unknown[] {
  return all.map((e) =>
    objectSpread({}, e, {
      name: Array.isArray(e.name)
        ? e.name
        : [e.name]
    }));
}

export function v0ToV1 (registry: Registry, v0: ContractMetadataV0): ContractMetadataV1 {
  return registry.createType('ContractMetadataV1', objectSpread({}, v0, {
    spec: objectSpread({}, v0.spec, {
      constructors: v0ToV1Names(v0.spec.constructors),
      messages: v0ToV1Names(v0.spec.messages)
    }),
    types: convertSiV0toV1(registry, v0.types)
  }));
}
