// Copyright 2017-2022 @polkadot/wasm-crypto-init authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as bridgeInfo } from 'https://deno.land/x/polkadot@0.0.3/wasm-bridge/packageInfo.ts';
import { packageInfo as asmInfo } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto-asmjs/packageInfo.ts';
import { packageInfo as wasmInfo } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto-wasm/packageInfo.ts';

export default [bridgeInfo, asmInfo, wasmInfo];
