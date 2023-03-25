
import type { Codec, CodecClass, Registry } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { DetectCodec } from '../types/index.ts';

import { createClassUnsafe } from 'https://deno.land/x/polkadot/types-create/mod.ts';

export function createClass<T extends Codec = Codec, K extends string = string> (registry: Registry, type: K): CodecClass<DetectCodec<T, K>> {
  return createClassUnsafe(registry, type);
}
