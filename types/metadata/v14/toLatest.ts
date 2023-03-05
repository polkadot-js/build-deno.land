
import type { Registry } from 'https://deno.land/x/polkadot@0.2.29/types-codec/types/index.ts';
import type { MetadataLatest, MetadataV14 } from '../../interfaces/metadata/index.ts';

/**
 * Convert the Metadata (which is an alias) to latest
 * @internal
 **/
export function toLatest (registry: Registry, v14: MetadataV14, _metaVersion: number): MetadataLatest {
  return v14;
}
