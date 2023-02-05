// Copyright 2017-2023 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { xglobal } from 'https://deno.land/x/polkadot@0.2.26/x-global/mod.ts';

import { hasBuffer } from '../has.ts';
import { isFunction } from './function.ts';

// We define these interfaces to not have the Buffer type
// (doing this removes the need for node types being available)
interface BufTyp { isBuffer: (value: unknown) => boolean }
interface BufObj { readDoubleLE: (...args: unknown[]) => unknown }

/**
 * @name isBuffer
 * @summary Tests for a `Buffer` object instance.
 * @description
 * Checks to see if the input object is an instance of `Buffer`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isBuffer } from 'https://deno.land/x/polkadot@0.2.26/util/mod.ts';
 *
 * console.log('isBuffer', isBuffer(Buffer.from([]))); // => true
 * ```
 */
export function isBuffer (value: unknown): value is Buffer {
  // we do check a function first, since it is slightly faster than isBuffer itself
  return hasBuffer && isFunction(value && (value as BufObj).readDoubleLE) && (xglobal.Buffer as BufTyp).isBuffer(value);
}
