
import type { BufferClass, BufferObject } from '../types.ts';

import { xglobal } from 'https://deno.land/x/polkadot@0.2.44/x-global/mod.ts';

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
 * import { isBuffer } from 'https://deno.land/x/polkadot@0.2.44/util/mod.ts';
 *
 * console.log('isBuffer', isBuffer(Buffer.from([]))); // => true
 * ```
 */
export function isBuffer <T = BufferObject> (value: unknown): value is T {
  // we do check a function first, since it is slightly faster than isBuffer itself
  return hasBuffer && !!value && isFunction((value as unknown as BufferObject).readDoubleLE) && (xglobal.Buffer as unknown as BufferClass).isBuffer(value);
}
