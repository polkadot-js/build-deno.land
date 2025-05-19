
import type { Registry } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { MetadataLatest, MetadataV16 } from '../../interfaces/metadata/index.ts';

/**
 * Convert the Metadata (which is an alias) to latest
 * @internal
 **/
export function toLatest (_registry: Registry, v16: MetadataV16, _metaVersion: number): MetadataLatest {
  return v16;
}
