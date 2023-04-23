
import type { Registry } from 'https://deno.land/x/polkadot@0.2.36/types-codec/types/index.ts';
import type { HexString } from 'https://deno.land/x/polkadot@0.2.36/util/types.ts';

import { isString, isU8a, u8aToU8a } from 'https://deno.land/x/polkadot@0.2.36/util/mod.ts';

import { MetadataVersioned } from './MetadataVersioned.ts';

const EMPTY_METADATA = new Uint8Array([0x6d, 0x65, 0x74, 0x61, 9]);

const VERSION_IDX = EMPTY_METADATA.length - 1;

/** @internal */
function decodeU8a (registry: Registry, u8a: Uint8Array): MetadataVersioned | Uint8Array {
  if (u8a.length === 0) {
    return EMPTY_METADATA;
  } else if (u8a[VERSION_IDX] === 9) {
    // This is an f-ing hack as a follow-up to another ugly hack
    // https://github.com/polkadot-js/api/commit/a9211690be6b68ad6c6dad7852f1665cadcfa5b2
    // when we fail on V9, try to re-parse it as v10...
    try {
      return new MetadataVersioned(registry, u8a);
    } catch {
      u8a[VERSION_IDX] = 10;

      return u8a;
    }
  }

  return u8a;
}

/**
 * @name Metadata
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export class Metadata extends MetadataVersioned {
  constructor (registry: Registry, value?: Uint8Array | HexString | Map<string, unknown> | Record<string, unknown>) {
    // const timeStart = performance.now()

    super(
      registry,
      isU8a(value) || isString(value)
        ? decodeU8a(registry, u8aToU8a(value))
        : value
    );

    // console.log('Metadata', `${(performance.now() - timeStart).toFixed(2)}ms`)
  }
}
