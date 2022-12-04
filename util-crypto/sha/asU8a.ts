// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { sha256 as sha256Js } from 'https://esm.sh/@noble/hashes@1.1.3/sha256.js';
import { sha512 as sha512Js } from 'https://esm.sh/@noble/hashes@1.1.3/sha512.js';

import { sha256, sha512 } from 'https://deno.land/x/polkadot@0.2.19/wasm-crypto/mod.ts';

import { createBitHasher, createDualHasher } from '../helpers.ts';

/**
 * @name shaAsU8a
 * @summary Creates a sha Uint8Array from the input.
 */
export const shaAsU8a = /*#__PURE__*/ createDualHasher(
  { 256: sha256, 512: sha512 },
  { 256: sha256Js, 512: sha512Js }
);

/**
 * @name sha256AsU8a
 * @summary Creates a sha256 Uint8Array from the input.
 */
export const sha256AsU8a = /*#__PURE__*/ createBitHasher(256, shaAsU8a);

/**
 * @name sha512AsU8a
 * @summary Creates a sha512 Uint8Array from the input.
 */
export const sha512AsU8a = /*#__PURE__*/ createBitHasher(512, shaAsU8a);
