// Copyright 2017-2023 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { U8aLike } from '../types.ts';

import { u8aToU8a } from './toU8a.ts';

/**
 * @name u8aConcat
 * @summary Creates a concatenated Uint8Array from the inputs.
 * @description
 * Concatenates the input arrays into a single `UInt8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { { u8aConcat } from 'https://deno.land/x/polkadot@0.2.25/util/mod.ts';
 *
 * u8aConcat(
 *   new Uint8Array([1, 2, 3]),
 *   new Uint8Array([4, 5, 6])
 * ); // [1, 2, 3, 4, 5, 6]
 * ```
 */
export function u8aConcat (...list: readonly U8aLike[]): Uint8Array {
  const u8as = new Array<Uint8Array>(list.length);
  let length = 0;

  for (let i = 0; i < list.length; i++) {
    u8as[i] = u8aToU8a(list[i]);
    length += u8as[i].length;
  }

  return u8aConcatStrict(u8as, length);
}

/**
 * @name u8aConcatStrict
 * @description A strict version of [[u8aConcat]], accepting only Uint8Array inputs
 */
export function u8aConcatStrict (u8as: readonly Uint8Array[], length = 0): Uint8Array {
  let offset = 0;

  if (!length) {
    for (let i = 0; i < u8as.length; i++) {
      length += u8as[i].length;
    }
  }

  const result = new Uint8Array(length);

  for (let i = 0; i < u8as.length; i++) {
    result.set(u8as[i], offset);
    offset += u8as[i].length;
  }

  return result;
}
