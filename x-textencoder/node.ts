// Copyright 2017-2022 @polkadot/x-textencoder authors & contributors
// SPDX-License-Identifier: Apache-2.0

import util from 'https://deno.land/std@0.148.0/node/util.ts';

import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.14/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

class Fallback {
  #encoder: util.TextEncoder;

  constructor () {
    this.#encoder = new util.TextEncoder();
  }

  // For a Jest 26.0.1 environment, Buffer !== Uint8Array
  encode (value: string): Uint8Array {
    return Uint8Array.from(this.#encoder.encode(value));
  }
}

export const TextEncoder = extractGlobal('TextEncoder', Fallback);
