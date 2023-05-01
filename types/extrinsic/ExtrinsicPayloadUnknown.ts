
import type { Registry } from 'https://deno.land/x/polkadot@0.2.38/types-codec/types/index.ts';
import type { ExtrinsicPayloadOptions } from './types.ts';

import { Struct } from 'https://deno.land/x/polkadot@0.2.38/types-codec/mod.ts';

/**
 * @name GenericExtrinsicPayloadUnknown
 * @description
 * A default handler for payloads where the version is not known (default throw)
 */
export class GenericExtrinsicPayloadUnknown extends Struct {
  constructor (registry: Registry, _value?: unknown, { version = 0 }: Partial<ExtrinsicPayloadOptions> = {}) {
    super(registry, {});

    throw new Error(`Unsupported extrinsic payload version ${version}`);
  }
}
