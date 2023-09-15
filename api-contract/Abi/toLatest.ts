
import type { ContractMetadataLatest, ContractMetadataV4 } from 'https://deno.land/x/polkadot@0.2.42/types/interfaces/index.ts';
import type { Registry } from 'https://deno.land/x/polkadot@0.2.42/types/types/index.ts';

import { v0ToV1 } from './toV1.ts';
import { v1ToV2 } from './toV2.ts';
import { v2ToV3 } from './toV3.ts';
import { v3ToV4 } from './toV4.ts';

export const enumVersions = ['V4', 'V3', 'V2', 'V1'] as const;

type Versions = typeof enumVersions[number] | 'V0';

type Converter = (registry: Registry, vx: any) => ContractMetadataLatest;

function createConverter <I, O> (next: (registry: Registry, input: O) => ContractMetadataLatest, step: (registry: Registry, input: I) => O): (registry: Registry, input: I) => ContractMetadataLatest {
  return (registry: Registry, input: I): ContractMetadataLatest =>
    next(registry, step(registry, input));
}

export function v4ToLatest (_registry: Registry, v4: ContractMetadataV4): ContractMetadataLatest {
  return v4;
}

export const v3ToLatest = /*#__PURE__*/ createConverter(v4ToLatest, v3ToV4);
export const v2ToLatest = /*#__PURE__*/ createConverter(v3ToLatest, v2ToV3);
export const v1ToLatest = /*#__PURE__*/ createConverter(v2ToLatest, v1ToV2);
export const v0ToLatest = /*#__PURE__*/ createConverter(v1ToLatest, v0ToV1);

export const convertVersions: [Versions, Converter][] = [
  ['V4', v4ToLatest],
  ['V3', v3ToLatest],
  ['V2', v2ToLatest],
  ['V1', v1ToLatest],
  ['V0', v0ToLatest]
];
