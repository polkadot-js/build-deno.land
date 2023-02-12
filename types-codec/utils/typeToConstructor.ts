
import type { Codec, CodecClass, Registry } from '../types/index.ts';

import { isString } from 'https://deno.land/x/polkadot/util/mod.ts';

export function typeToConstructor <T extends Codec = Codec> (registry: Registry, type: string | CodecClass<T>): CodecClass<T> {
  return (
    isString(type)
      ? registry.createClassUnsafe(type)
      : type
  );
}
