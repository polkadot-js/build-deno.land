
import util from 'node:util';

import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.37/x-global/mod.ts';

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

export const TextEncoder = /*#__PURE__*/ extractGlobal('TextEncoder', Fallback);
