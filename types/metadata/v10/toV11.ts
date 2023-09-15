
import type { Registry } from 'https://deno.land/x/polkadot@0.2.42/types-codec/types/index.ts';
import type { MetadataV10, MetadataV11 } from '../../interfaces/metadata/index.ts';

/** @internal */
export function toV11 (registry: Registry, { modules }: MetadataV10): MetadataV11 {
  return registry.createTypeUnsafe('MetadataV11', [{
    // This is new in V11, pass V0 here - something non-existing, telling the API to use
    // the fallback for this information (on-chain detection)
    extrinsic: {
      signedExtensions: [],
      version: 0
    },
    modules
  }]);
}
