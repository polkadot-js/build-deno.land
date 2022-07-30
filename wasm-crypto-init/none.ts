// Copyright 2019-2022 @polkadot/wasm-crypto-init authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { InitFn } from 'https://deno.land/x/polkadot@0.0.9/wasm-bridge/types.ts';
import type { WasmCryptoInstance } from './types.ts';

import { createWasmFn } from 'https://deno.land/x/polkadot@0.0.9/wasm-bridge/mod.ts';

export { packageInfo } from './packageInfo.ts';

/**
 * @name createWasm
 * @description
 * Creates an interface using no WASM and no ASM.js
 */
export const createWasm: InitFn<WasmCryptoInstance> = createWasmFn('crypto', null, null);
