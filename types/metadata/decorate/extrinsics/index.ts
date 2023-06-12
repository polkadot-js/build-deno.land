
import type { Registry } from 'https://deno.land/x/polkadot@0.2.41/types-codec/types/index.ts';
import type { MetadataLatest, PalletMetadataLatest, SiVariant } from '../../../interfaces/index.ts';
import type { PortableRegistry } from '../../../metadata/index.ts';
import type { CallFunction } from '../../../types/index.ts';
import type { Extrinsics } from '../types.ts';

import { lazyMethod, objectSpread, stringCamelCase } from 'https://deno.land/x/polkadot@0.2.41/util/mod.ts';

import { lazyVariants } from '../../../create/lazy.ts';
import { getSiName } from '../../util/index.ts';
import { objectNameToCamel } from '../util.ts';
import { createUnchecked } from './createUnchecked.ts';

export function filterCallsSome ({ calls }: PalletMetadataLatest): boolean {
  return calls.isSome;
}

export function createCallFunction (registry: Registry, lookup: PortableRegistry, variant: SiVariant, sectionName: string, sectionIndex: number): CallFunction {
  const { fields, index } = variant;
  const count = fields.length;
  const args = new Array<Record<string, unknown>>(count);

  for (let i = 0; i < count; i++) {
    const { name, type, typeName } = fields[i];

    args[i] = objectSpread(
      {
        name: stringCamelCase(name.unwrapOr(`param${i}`)),
        type: getSiName(lookup, type)
      },
      typeName.isSome
        ? { typeName: typeName.unwrap() }
        : null
    );
  }

  return createUnchecked(
    registry,
    sectionName,
    new Uint8Array([sectionIndex, index.toNumber()]),
    registry.createTypeUnsafe('FunctionMetadataLatest', [objectSpread({ args }, variant)])
  );
}

/** @internal */
export function decorateExtrinsics (registry: Registry, { lookup, pallets }: MetadataLatest, version: number): Extrinsics {
  const result: Extrinsics = {};
  const filtered = pallets.filter(filterCallsSome);

  for (let i = 0, count = filtered.length; i < count; i++) {
    const { calls, index, name } = filtered[i];
    const sectionName = stringCamelCase(name);
    const sectionIndex = version >= 12 ? index.toNumber() : i;

    lazyMethod(result, sectionName, () =>
      lazyVariants(lookup, calls.unwrap(), objectNameToCamel, (variant: SiVariant) =>
        createCallFunction(registry, lookup, variant, sectionName, sectionIndex)
      )
    );
  }

  return result;
}
