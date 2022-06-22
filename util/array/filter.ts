// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name arrayFilter
 * @summary Filters undefined and (optionally) null values from an array
 * @description
 * Returns a new array with all `undefined` values removed. Optionally, when `allowNulls = false`, it removes the `null` values as well
 * @example
 * <BR>
 *
 * ```javascript
 * import { arrayFilter } from 'https://deno.land/x/polkadot@0.0.0-6/util/mod.ts';
 *
 * arrayFilter([0, void 0, true, null, false, '']); // [0, true, null, false, '']
 * arrayFilter([0, void 0, true, null, false, ''], false); // [0, true, false, '']
 * ```
 */
export function arrayFilter <T = unknown> (array: (T | null | undefined)[], allowNulls = true): T[] {
  return array.filter((v): v is T =>
    v !== undefined &&
    (allowNulls || v !== null)
  );
}
