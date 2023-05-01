
import type { Codec, Registry } from 'https://deno.land/x/polkadot@0.2.38/types-codec/types/index.ts';
import type { DetectCodec } from '../types/index.ts';

import { createTypeUnsafe } from 'https://deno.land/x/polkadot@0.2.38/types-create/mod.ts';

/**
 * Create an instance of a `type` with a given `params`.
 * @param type - A recognizable string representing the type to create an
 * instance from
 * @param params - The value to instantiate the type with
 */
export function createType<T extends Codec = Codec, K extends string = string> (registry: Registry, type: K, ...params: unknown[]): DetectCodec<T, K> {
  return createTypeUnsafe(registry, type, params);
}
