
import type { InitFn } from 'https://deno.land/x/polkadot/wasm-bridge/types.ts';
import type { WasmCryptoInstance } from './types.ts';

import { createWasmFn } from 'https://deno.land/x/polkadot/wasm-bridge/mod.ts';
import { asmJsInit } from 'https://deno.land/x/polkadot/wasm-crypto-asmjs/mod.ts';
import { wasmBytes } from 'https://deno.land/x/polkadot/wasm-crypto-wasm/mod.ts';

export { packageInfo } from './packageInfo.ts';

/**
 * @name createWasm
 * @description
 * Creates an interface using WASM and a fallback ASM.js
 */
export const createWasm: InitFn<WasmCryptoInstance> = /*#__PURE__*/ createWasmFn('crypto', wasmBytes, asmJsInit);
