
import type { ContractMetadataV3, ContractMetadataV4 } from 'https://deno.land/x/polkadot@0.2.34/types/interfaces/index.ts';
import type { Registry } from 'https://deno.land/x/polkadot@0.2.34/types/types/index.ts';

export function v3ToV4 (_registry: Registry, v3: ContractMetadataV3): ContractMetadataV4 {
  return v3;
}
