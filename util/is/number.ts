// Copyright 2017-2023 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isNumber
 * @summary Tests for a JavaScript number.
 * @description
 * Checks to see if the input value is a valid number.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isNumber } from 'https://deno.land/x/polkadot@0.2.21/util/mod.ts';
 *
 * console.log('isNumber', isNumber(1234)); // => true
 * ```
 */
export function isNumber (value: unknown): value is number {
  return typeof value === 'number';
}
