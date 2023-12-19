
import type { PortableType } from '../../../interfaces/index.ts';
import type { StorageEntry } from '../../../primitive/types.ts';
import type { Registry } from '../../../types/index.ts';

import { getTypeDef } from 'https://deno.land/x/polkadot@0.2.45/types-create/mod.ts';

import { createFunction } from './createFunction.ts';

export interface ManualMetadata {
  docs: string;
  type: string;
}

interface ManualDefinition {
  method: string;
  prefix: string;
  section: string;
}

function findSiPrimitive (registry: Registry, type: string): PortableType | undefined {
  const prim = type.toLowerCase();

  return registry.lookup.types.find((t) =>
    (
      t.type.def.isPrimitive &&
      t.type.def.asPrimitive.toString().toLowerCase() === prim
    ) || (
      t.type.def.isHistoricMetaCompat &&
      t.type.def.asHistoricMetaCompat.toString().toLowerCase() === prim
    )
  );
}

function findSiType (registry: Registry, type: string): PortableType | undefined {
  let portable = findSiPrimitive(registry, type);

  // some types are either Sequence or Arrays, cater for these
  // specifically (these all come from the base substrate known keys)
  if (!portable && (type === 'Bytes' || type.startsWith('[u8;'))) {
    const u8 = findSiPrimitive(registry, 'u8');

    if (u8) {
      if (type === 'Bytes') {
        portable = registry.lookup.types.find((t) =>
          (
            t.type.def.isSequence &&
            t.type.def.asSequence.type.eq(u8.id)
          ) || (
            t.type.def.isHistoricMetaCompat &&
            t.type.def.asHistoricMetaCompat.eq(type)
          )
        );
      } else {
        const td = getTypeDef(type);

        portable = registry.lookup.types.find((t) =>
          (
            t.type.def.isArray &&
            t.type.def.asArray.eq({
              len: td.length,
              type: u8.id
            })
          ) || (
            t.type.def.isHistoricMetaCompat &&
            t.type.def.asHistoricMetaCompat.eq(type)
          )
        );
      }
    }
  }

  if (!portable) {
    // Not fatal, however if this happens the storage key using this
    // type will not return valid values, rather it will most probably
    // be decoded incorrectly
    console.warn(`Unable to map ${type} to a lookup index`);
  }

  return portable;
}

/** @internal */
export function createRuntimeFunction ({ method, prefix, section }: ManualDefinition, key: Uint8Array | string, { docs, type }: ManualMetadata): (registry: Registry) => StorageEntry {
  return (registry: Registry): StorageEntry =>
    createFunction(registry, {
      meta: registry.createTypeUnsafe('StorageEntryMetadataLatest', [{
        docs: registry.createTypeUnsafe('Vec<Text>', [[docs]]),
        modifier: registry.createTypeUnsafe('StorageEntryModifierLatest', ['Required']),
        name: registry.createTypeUnsafe('Text', [method]),
        toJSON: (): any => key,
        type: registry.createTypeUnsafe('StorageEntryTypeLatest', [{ Plain: findSiType(registry, type)?.id || 0 }])
      }]),
      method,
      prefix,
      section
    }, { key, skipHashing: true });
}
