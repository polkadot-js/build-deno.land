
import type { Registry } from 'https://deno.land/x/polkadot@0.2.45/types-codec/types/index.ts';
import type { MetadataLatest, PalletConstantMetadataLatest } from '../../../interfaces/index.ts';
import type { ConstantCodec, Constants } from '../types.ts';

import { hexToU8a, lazyMethod, lazyMethods, stringCamelCase } from 'https://deno.land/x/polkadot@0.2.45/util/mod.ts';

import { objectNameToCamel } from '../util.ts';

/** @internal */
export function decorateConstants (registry: Registry, { pallets }: MetadataLatest, _version: number): Constants {
  const result: Constants = {};

  for (let i = 0, count = pallets.length; i < count; i++) {
    const { constants, name } = pallets[i];

    if (!constants.isEmpty) {
      lazyMethod(result, stringCamelCase(name), () =>
        lazyMethods(
          {},
          constants,
          (constant: PalletConstantMetadataLatest): ConstantCodec => {
            const codec = registry.createTypeUnsafe<ConstantCodec>(registry.createLookupType(constant.type), [hexToU8a(constant.value.toHex())]);

            // We are casting here since we are assigning to a read-only property
            (codec as { meta: PalletConstantMetadataLatest }).meta = constant;

            return codec;
          },
          objectNameToCamel
        )
      );
    }
  }

  return result;
}
