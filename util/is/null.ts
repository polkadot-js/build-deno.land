// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isNull
 * @summary Tests for a `null` values.
 * @description
 * Checks to see if the input value is `null`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isNull } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
 *
 * console.log('isNull', isNull(null)); // => true
 * ```
 */
export function isNull (value?: unknown): value is null {
  return value === null;
}
