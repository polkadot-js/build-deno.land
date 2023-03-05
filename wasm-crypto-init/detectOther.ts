
import { packageInfo as bridgeInfo } from 'https://deno.land/x/polkadot@0.2.29/wasm-bridge/packageInfo.ts';
import { packageInfo as asmInfo } from 'https://deno.land/x/polkadot@0.2.29/wasm-crypto-asmjs/packageInfo.ts';
import { packageInfo as wasmInfo } from 'https://deno.land/x/polkadot@0.2.29/wasm-crypto-wasm/packageInfo.ts';

export default [bridgeInfo, asmInfo, wasmInfo];
