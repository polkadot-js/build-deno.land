// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line @typescript-eslint/ban-types
type FnType = Function;

/**
 * @name isFunction
 * @summary Tests for a `function`.
 * @description
 * Checks to see if the input value is a JavaScript function.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isFunction } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
 *
 * isFunction(() => false); // => true
 * ```
 */
export function isFunction (value: unknown): value is FnType {
  return typeof value === 'function';
}
