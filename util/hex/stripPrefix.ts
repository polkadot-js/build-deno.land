// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { REGEX_HEX_NOPREFIX, REGEX_HEX_PREFIXED } from '../is/hex.ts';

/**
 * @name hexStripPrefix
 * @summary Strips any leading `0x` prefix.
 * @description
 * Tests for the existence of a `0x` prefix, and returns the value without the prefix. Un-prefixed values are returned as-is.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexStripPrefix } from 'https://deno.land/x/polkadot@0.0.9/util/mod.ts';
 *
 * console.log('stripped', hexStripPrefix('0x1234')); // => 1234
 * ```
 */
export function hexStripPrefix (value?: string | null): string {
  if (!value || value === '0x') {
    return '';
  } else if (REGEX_HEX_PREFIXED.test(value)) {
    return value.substring(2);
  } else if (REGEX_HEX_NOPREFIX.test(value)) {
    return value;
  }

  throw new Error(`Expected hex value to convert, found '${value}'`);
}
