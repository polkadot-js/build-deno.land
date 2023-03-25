
import type { InitFn } from 'https://deno.land/x/polkadot@0.2.33/wasm-bridge/types.ts';
import type { WasmCryptoInstance } from './types.ts';

import { createWasmFn } from 'https://deno.land/x/polkadot@0.2.33/wasm-bridge/mod.ts';
import { wasmBytes } from 'https://deno.land/x/polkadot@0.2.33/wasm-crypto-wasm/mod.ts';

export { packageInfo } from './packageInfo.ts';

/**
 * @name createWasm
 * @description
 * Creates an interface using only WASM
 */
export const createWasm: InitFn<WasmCryptoInstance> = /*#__PURE__*/ createWasmFn('crypto', wasmBytes, null);
