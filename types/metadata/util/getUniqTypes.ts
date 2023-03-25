
import type { Registry } from 'https://deno.land/x/polkadot@0.2.33/types-codec/types/index.ts';
import type { MetadataLatest, SiLookupTypeId } from '../../interfaces/index.ts';
import type { PortableRegistry } from '../../metadata/index.ts';

import { flattenUniq } from './flattenUniq.ts';
import { validateTypes } from './validateTypes.ts';

/** @internal */
function extractTypes (lookup: PortableRegistry, types: { type: SiLookupTypeId }[]): string[] {
  return types.map(({ type }) =>
    lookup.getTypeDef(type).type
  );
}

/** @internal */
function extractFieldTypes (lookup: PortableRegistry, type: SiLookupTypeId): string[][] {
  return lookup.getSiType(type).def.asVariant.variants.map(({ fields }) =>
    extractTypes(lookup, fields)
  );
}

/** @internal */
function getPalletNames ({ lookup, pallets }: MetadataLatest): string[][][] {
  return pallets.reduce<string[][][]>((all, { calls, constants, events, storage }) => {
    all.push([extractTypes(lookup, constants)]);

    if (calls.isSome) {
      all.push(extractFieldTypes(lookup, calls.unwrap().type));
    }

    if (events.isSome) {
      all.push(extractFieldTypes(lookup, events.unwrap().type));
    }

    if (storage.isSome) {
      all.push(storage.unwrap().items.map(({ type }): string[] => {
        if (type.isPlain) {
          return [lookup.getTypeDef(type.asPlain).type];
        }

        const { hashers, key, value } = type.asMap;

        return hashers.length === 1
          ? [
            lookup.getTypeDef(value).type,
            lookup.getTypeDef(key).type
          ]
          : [
            lookup.getTypeDef(value).type,
            ...lookup.getSiType(key).def.asTuple.map((t) =>
              lookup.getTypeDef(t).type
            )
          ];
      }));
    }

    return all;
  }, []);
}

/** @internal */
export function getUniqTypes (registry: Registry, meta: MetadataLatest, throwError: boolean): string[] {
  return validateTypes(registry, throwError, flattenUniq(getPalletNames(meta)));
}
