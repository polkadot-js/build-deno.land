
import { createWasm } from 'https://deno.land/x/polkadot@0.2.43/wasm-crypto-init/asm.ts';

import { initBridge } from './init.ts';

/**
 * @name initWasm
 * @description
 * For historic purposes and for tighter control on init, specifically performing
 * a WASM initialization with only ASM.js
 *
 * Generally should not be used unless you want explicit control over which
 * interfaces are initialized.
 */
export async function initWasm (): Promise<void> {
  await initBridge(createWasm);
}

initWasm().catch((): void => {
  // cannot happen, initWasm doesn't throw
});
