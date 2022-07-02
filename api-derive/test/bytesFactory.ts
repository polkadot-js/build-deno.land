// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Bytes } from 'https://deno.land/x/polkadot@0.0.2/types/mod.ts';
import { Registry } from 'https://deno.land/x/polkadot@0.0.2/types/types/index.ts';

export class BytesFactory {
  #registry: Registry;

  constructor (registry: Registry) {
    this.#registry = registry;
  }

  public bytes = (value: string): Bytes => this.#registry.createType('Bytes', value);
}
