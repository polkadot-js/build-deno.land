
import type { InitFn } from 'https://deno.land/x/polkadot@0.2.29/wasm-bridge/types.ts';
import type { WasmCryptoInstance } from './types.ts';

import { createWasmFn } from 'https://deno.land/x/polkadot@0.2.29/wasm-bridge/mod.ts';
import { asmJsInit } from 'https://deno.land/x/polkadot@0.2.29/wasm-crypto-asmjs/mod.ts';

export { packageInfo } from './packageInfo.ts';

/**
 * @name createWasm
 * @description
 * Creates an interface using only ASM.js
 */
export const createWasm: InitFn<WasmCryptoInstance> = /*#__PURE__*/ createWasmFn('crypto', null, asmJsInit);
