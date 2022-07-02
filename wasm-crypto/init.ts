// Copyright 2019-2022 @polkadot/wasm-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { InitFn } from 'https://deno.land/x/polkadot@0.0.2/wasm-bridge/types.ts';
import type { WasmCryptoInstance } from 'https://deno.land/x/polkadot@0.0.2/wasm-crypto-init/types.ts';

import { Bridge } from 'https://deno.land/x/polkadot@0.0.2/wasm-bridge/mod.ts';
import { createWasm } from 'https://deno.land/x/polkadot@0.0.2/wasm-crypto-init/mod.ts';

/**
 * @name bridge
 * @description
 * The JS <-> WASM bridge that is in operation. For the specific package
 * it is a global, i.e. all operations happens on this specific bridge
 */
export const bridge = new Bridge<WasmCryptoInstance>(createWasm);

/**
 * @name initBridge
 * @description
 * Creates a new bridge interface with the (optional) initialization function
 */
export async function initBridge (createWasm?: InitFn<WasmCryptoInstance>): Promise<WasmCryptoInstance | null> {
  return bridge.init(createWasm);
}
