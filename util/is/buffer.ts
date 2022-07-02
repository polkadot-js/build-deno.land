// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasBuffer } from '../has.ts';
import { isFunction } from './function.ts';

/**
 * @name isBuffer
 * @summary Tests for a `Buffer` object instance.
 * @description
 * Checks to see if the input object is an instance of `Buffer`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isBuffer } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
 *
 * console.log('isBuffer', isBuffer(Buffer.from([]))); // => true
 * ```
 */
export function isBuffer (value: unknown): value is Buffer {
  // we do check a function first, since it is slightly faster than isBuffer itself
  return hasBuffer && isFunction(value && (value as Buffer).readDoubleLE) && Buffer.isBuffer(value);
}
