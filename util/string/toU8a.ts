// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyString } from '../types.ts';

import { TextEncoder } from 'https://deno.land/x/polkadot@0.2.1/x-textencoder/mod.ts';

const encoder = new TextEncoder();

/**
 * @name stringToU8a
 * @summary Creates a Uint8Array object from a utf-8 string.
 * @description
 * String input values return the actual encoded `UInt8Array`. `null` or `undefined` values returns an empty encoded array.
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringToU8a } from 'https://deno.land/x/polkadot@0.2.1/util/mod.ts';
 *
 * stringToU8a('hello'); // [0x68, 0x65, 0x6c, 0x6c, 0x6f]
 * ```
 */
export function stringToU8a (value?: AnyString | null): Uint8Array {
  return value
    ? encoder.encode(value.toString())
    : new Uint8Array();
}
