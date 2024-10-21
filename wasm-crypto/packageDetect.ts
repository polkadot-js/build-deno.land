

import { detectPackage } from 'https://deno.land/x/polkadot/util/mod.ts';
import { packageInfo as bridgeInfo } from 'https://deno.land/x/polkadot/wasm-bridge/packageInfo.ts';
import { packageInfo as asmInfo } from 'https://deno.land/x/polkadot/wasm-crypto-asmjs/packageInfo.ts';
import { packageInfo as initInfo } from 'https://deno.land/x/polkadot/wasm-crypto-init/packageInfo.ts';
import { packageInfo as wasmInfo } from 'https://deno.land/x/polkadot/wasm-crypto-wasm/packageInfo.ts';
import { packageInfo as utilInfo } from 'https://deno.land/x/polkadot/wasm-util/packageInfo.ts';

import { packageInfo } from './packageInfo.ts';

detectPackage(packageInfo, null, [asmInfo, bridgeInfo, initInfo, utilInfo, wasmInfo]);
