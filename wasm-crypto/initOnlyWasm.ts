
import { createWasm } from 'https://deno.land/x/polkadot@0.2.42/wasm-crypto-init/wasm.ts';

import { initBridge } from './init.ts';

/**
 * @name initWasm
 * @description
 * For historic purposes and for tighter control on init, specifically performing
 * a WASM initialization with only WASM (generally the default for most platforms)
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
