// Copyright 2019-2022 @polkadot/wasm-crypto-wasm authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { base64Decode, unzlibSync } from 'https://deno.land/x/polkadot@0.0.9/wasm-util/mod.ts';

import { bytes, lenIn, lenOut } from './deno/bytes.js';

export { packageInfo } from './packageInfo.ts';

/**
 * @name wasmBytes
 * @description
 * The decoded WASM interface as exposed by this package.
 *
 * The build process will output into cjs/* into a compressed base64 format.
 * Upon loading the exposed bytes will be decoded and decompressed form this
 * specific format and returned.
 */
export const wasmBytes = unzlibSync(base64Decode(bytes, new Uint8Array(lenIn)), new Uint8Array(lenOut));
