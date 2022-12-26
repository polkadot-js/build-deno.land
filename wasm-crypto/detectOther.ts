// Copyright 2017-2022 @polkadot/wasm-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as bridgeInfo } from 'https://deno.land/x/polkadot@0.2.20/wasm-bridge/packageInfo.ts';
import { packageInfo as asmInfo } from 'https://deno.land/x/polkadot@0.2.20/wasm-crypto-asmjs/packageInfo.ts';
import { packageInfo as initInfo } from 'https://deno.land/x/polkadot@0.2.20/wasm-crypto-init/packageInfo.ts';
import { packageInfo as wasmInfo } from 'https://deno.land/x/polkadot@0.2.20/wasm-crypto-wasm/packageInfo.ts';
import { packageInfo as utilInfo } from 'https://deno.land/x/polkadot@0.2.20/wasm-util/packageInfo.ts';

export default [bridgeInfo, asmInfo, initInfo, wasmInfo, utilInfo];
