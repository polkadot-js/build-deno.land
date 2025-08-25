
import type { InitFn } from 'https://deno.land/x/polkadot/wasm-bridge/types.ts';
import type { WasmCryptoInstance } from './types.ts';

import { createWasmFn } from 'https://deno.land/x/polkadot/wasm-bridge/mod.ts';
import * as mod from 'https://deno.land/x/polkadot/wasm-crypto-asmjs/mod.ts';

const { asmJsInit } = mod;

export { packageInfo } from './packageInfo.ts';

/**
 * @name createWasm
 * @description
 * Creates an interface using only ASM.js
 */
export const createWasm: InitFn<WasmCryptoInstance> = /*#__PURE__*/ createWasmFn('crypto', null, asmJsInit);
