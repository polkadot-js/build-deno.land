
import type { Vec } from 'https://deno.land/x/polkadot@0.2.40/types-codec/mod.ts';
import type { Codec } from '../types/index.ts';

export interface MetadataInterface<Modules extends Codec> extends Codec {
  pallets: Vec<Modules>;
}
