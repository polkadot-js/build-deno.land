// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, Registry } from '../types/index.ts';

import { isString } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

export function typeToConstructor <T extends Codec = Codec> (registry: Registry, type: string | CodecClass<T>): CodecClass<T> {
  return (
    isString(type)
      ? registry.createClassUnsafe(type)
      : type
  );
}
