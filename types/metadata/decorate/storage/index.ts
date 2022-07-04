// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from 'https://deno.land/x/polkadot@0.0.3/types-codec/types/index.ts';
import type { MetadataLatest, StorageEntryMetadataLatest } from '../../../interfaces/index.ts';
import type { Storage } from '../types.ts';

import { lazyMethod, lazyMethods, stringCamelCase } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import { objectNameToCamel } from '../util.ts';
import { createFunction, createKeyRaw, NO_RAW_ARGS } from './createFunction.ts';
import { getStorage } from './getStorage.ts';
import { createRuntimeFunction } from './util.ts';

const VERSION_NAME = 'palletVersion';
const VERSION_KEY = ':__STORAGE_VERSION__:';
const VERSION_DOCS = { docs: 'Returns the current pallet version from storage', type: 'u16' };

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateStorage (registry: Registry, { pallets }: MetadataLatest, _metaVersion: number): Storage {
  const result: Storage = getStorage(registry);

  for (let i = 0; i < pallets.length; i++) {
    const { name, storage } = pallets[i];

    if (storage.isSome) {
      const section = stringCamelCase(name);
      const { items, prefix: _prefix } = storage.unwrap();
      const prefix = _prefix.toString();

      lazyMethod(result, section, () =>
        lazyMethods(
          {
            palletVersion: createRuntimeFunction(
              { method: VERSION_NAME, prefix, section },
              createKeyRaw(registry, { method: VERSION_KEY, prefix: name.toString() }, NO_RAW_ARGS),
              VERSION_DOCS
            )(registry)
          },
          items,
          (meta: StorageEntryMetadataLatest) =>
            createFunction(registry, { meta, method: meta.name.toString(), prefix, section }, {}),
          objectNameToCamel
        )
      );
    }
  }

  return result;
}
