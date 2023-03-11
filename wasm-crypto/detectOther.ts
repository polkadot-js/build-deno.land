
import { packageInfo as bridgeInfo } from 'https://deno.land/x/polkadot/wasm-bridge/packageInfo.ts';
import { packageInfo as asmInfo } from 'https://deno.land/x/polkadot/wasm-crypto-asmjs/packageInfo.ts';
import { packageInfo as initInfo } from 'https://deno.land/x/polkadot/wasm-crypto-init/packageInfo.ts';
import { packageInfo as wasmInfo } from 'https://deno.land/x/polkadot/wasm-crypto-wasm/packageInfo.ts';
import { packageInfo as utilInfo } from 'https://deno.land/x/polkadot/wasm-util/packageInfo.ts';

export default [bridgeInfo, asmInfo, initInfo, wasmInfo, utilInfo];
