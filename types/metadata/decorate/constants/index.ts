// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from 'https://deno.land/x/polkadot@0.0.2/types-codec/types/index.ts';
import type { MetadataLatest, PalletConstantMetadataLatest } from '../../../interfaces/index.ts';
import type { ConstantCodec, Constants } from '../types.ts';

import { hexToU8a, lazyMethod, lazyMethods, stringCamelCase } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

import { objectNameToCamel } from '../util.ts';

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateConstants (registry: Registry, { pallets }: MetadataLatest, _version: number): Constants {
  const result: Constants = {};

  for (let i = 0; i < pallets.length; i++) {
    const { constants, name } = pallets[i];

    if (!constants.isEmpty) {
      lazyMethod(result, stringCamelCase(name), () =>
        lazyMethods(
          {},
          constants,
          (constant: PalletConstantMetadataLatest): ConstantCodec => {
            const codec = registry.createTypeUnsafe(registry.createLookupType(constant.type), [hexToU8a(constant.value.toHex())]);

            (codec as unknown as Record<string, unknown>).meta = constant;

            return codec as ConstantCodec;
          },
          objectNameToCamel
        )
      );
    }
  }

  return result;
}
