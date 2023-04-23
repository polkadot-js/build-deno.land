
import type { SiLookupTypeId, SiVariant } from '../interfaces/index.ts';
import type { PortableRegistry } from '../metadata/index.ts';

import { lazyMethod } from 'https://deno.land/x/polkadot@0.2.36/util/mod.ts';

interface TypeHolder {
  type: SiLookupTypeId
}

export function lazyVariants <T> (lookup: PortableRegistry, { type }: TypeHolder, getName: (v: SiVariant) => string, creator: (v: SiVariant) => T): Record<string, T> {
  const result: Record<string, T> = {};
  const variants = lookup.getSiType(type).def.asVariant.variants;

  for (let i = 0; i < variants.length; i++) {
    lazyMethod(result, variants[i], creator, getName, i);
  }

  return result;
}
