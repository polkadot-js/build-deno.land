// Copyright 2017-2023 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BigInt } from 'https://deno.land/x/polkadot@0.2.25/x-bigint/mod.ts';
import { xglobal } from 'https://deno.land/x/polkadot@0.2.25/x-global/mod.ts';

// Since we run in very different environments, we have to ensure we have all
// the types used here for detection (some of these may require Node definitions,
// which are not available in Deno/browser)
declare const __dirname: unknown;
declare const module: unknown;
declare const require: unknown;

// We define a scappy low-level interface to mock Buffer
// (this removes the need for the node typings)
type BufferClass = ((value: unknown) => unknown) & {
  isBuffer: (value: unknown) => boolean;
}

/** true if the environment has proper BigInt support */
export const hasBigInt = typeof BigInt === 'function' && typeof BigInt.asIntN === 'function';

/** true if the environment is CJS */
export const hasCjs = typeof require === 'function' && typeof module !== 'undefined';

/** true if the environment has __dirname available */
export const hasDirname = typeof __dirname !== 'undefined';

/** true if the environment is ESM */
export const hasEsm = !hasCjs;

/** true if the environment has WebAssembly available */
export const hasWasm = typeof WebAssembly !== 'undefined';

// NOTE We check the following on globalThis, avoiding specific polyfill detection
// that some bundlers such as parcel would add (this is a check, not a use)

/** true if the environment has support for Buffer (typically Node.js) */
export const hasBuffer = typeof xglobal.Buffer === 'function' && typeof (xglobal.Buffer as BufferClass).isBuffer === 'function';

/** true if the environment has process available (typically Node.js) */
export const hasProcess = typeof xglobal.process === 'object';
