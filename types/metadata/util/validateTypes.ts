
import type { Registry } from 'https://deno.land/x/polkadot@0.2.36/types-codec/types/index.ts';

import { logger } from 'https://deno.land/x/polkadot@0.2.36/util/mod.ts';

import { extractTypes } from './extractTypes.ts';
import { flattenUniq } from './flattenUniq.ts';

const l = logger('metadata');

/** @internal */
export function validateTypes (registry: Registry, throwError: boolean, types: string[]): string[] {
  const missing = flattenUniq(extractTypes(types))
    .filter((type) =>
      !registry.hasType(type) &&
      !registry.isLookupType(type)
    )
    .sort();

  if (missing.length !== 0) {
    const message = `Unknown types found, no types for ${missing.join(', ')}`;

    if (throwError) {
      throw new Error(message);
    } else {
      l.warn(message);
    }
  }

  return types;
}
