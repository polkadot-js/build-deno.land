
import type { Registry } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { MetadataLatest, MetadataV15 } from '../../interfaces/metadata/index.ts';

/**
 * Convert the Metadata (which is an alias) to latest
 * @internal
 **/
export function toLatest (_registry: Registry, v15: MetadataV15, _metaVersion: number): MetadataLatest {
  return v15;
}
