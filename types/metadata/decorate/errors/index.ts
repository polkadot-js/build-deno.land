
import type { Text, u8 } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { Registry } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { DispatchErrorModule, DispatchErrorModuleU8, DispatchErrorModuleU8a, MetadataLatest, SiField, SiVariant } from '../../../interfaces/index.ts';
import type { PortableRegistry } from '../../../metadata/index.ts';
import type { Errors, IsError } from '../types.ts';

import { isCodec, isU8a, lazyMethod, objectSpread, stringCamelCase } from 'https://deno.land/x/polkadot/util/mod.ts';

import { lazyVariants } from '../../../create/lazy.ts';
import { objectNameToString } from '../util.ts';

interface ItemMeta {
  args: string[];
  name: Text;
  fields: SiField[];
  index: u8;
  docs: Text[];
}

export function variantToMeta (lookup: PortableRegistry, variant: SiVariant): ItemMeta {
  return objectSpread(
    { args: variant.fields.map(({ type }) => lookup.getTypeDef(type).type) },
    variant
  );
}

/** @internal */
export function decorateErrors (registry: Registry, { lookup, pallets }: MetadataLatest, version: number): Errors {
  const result: Errors = {};

  for (let i = 0, count = pallets.length; i < count; i++) {
    const { errors, index, name } = pallets[i];

    if (errors.isSome) {
      const sectionIndex = version >= 12 ? index.toNumber() : i;

      lazyMethod(result, stringCamelCase(name), () =>
        lazyVariants(lookup, errors.unwrap(), objectNameToString, (variant: SiVariant): IsError => ({
          // We sprinkle in isCodec & isU8a to ensure we are dealing with the correct objects
          is: (errorMod: DispatchErrorModule | DispatchErrorModuleU8 | DispatchErrorModuleU8a) =>
            isCodec(errorMod) &&
            isCodec(errorMod.index) &&
            errorMod.index.eq(sectionIndex) && (
              isU8a(errorMod.error)
                ? errorMod.error[0] === variant.index.toNumber()
                : isCodec(errorMod.error) && errorMod.error.eq(variant.index)
            ),
          meta: registry.createTypeUnsafe('ErrorMetadataLatest', [variantToMeta(lookup, variant)])
        }))
      );
    }
  }

  return result;
}
