
import type { Registry } from 'https://deno.land/x/polkadot@0.2.27/types-codec/types/index.ts';
import type { ExtrinsicOptions } from './types.ts';

import { Struct } from 'https://deno.land/x/polkadot@0.2.27/types-codec/mod.ts';

import { UNMASK_VERSION } from './constants.ts';

/**
 * @name GenericExtrinsicUnknown
 * @description
 * A default handler for extrinsics where the version is not known (default throw)
 */
export class GenericExtrinsicUnknown extends Struct {
  constructor (registry: Registry, value?: unknown, { isSigned = false, version = 0 }: Partial<ExtrinsicOptions> = {}) {
    super(registry, {});

    throw new Error(`Unsupported ${isSigned ? '' : 'un'}signed extrinsic version ${version & UNMASK_VERSION}`);
  }
}
