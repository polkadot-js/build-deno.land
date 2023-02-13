
import type { AnyString } from '../types.ts';

import { CC_TO_LO, CC_TO_UP } from './camelCase.ts';

/** @internal */
function converter (map: readonly string[]): (value?: AnyString | null) => string {
  return (value?: AnyString | null): string =>
    value
      ? map[value.charCodeAt(0)] + value.slice(1)
      : '';
}

/**
 * @name stringLowerFirst
 * @summary Lowercase the first letter of a string
 * @description
 * Lowercase the first letter of a string
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringLowerFirst } from 'https://deno.land/x/polkadot@0.2.27/util/mod.ts';
 *
 * stringLowerFirst('ABC'); // => 'aBC'
 * ```
 */
export const stringLowerFirst = /*#__PURE__*/ converter(CC_TO_LO);

/**
 * @name stringUpperFirst
 * @summary Uppercase the first letter of a string
 * @description
 * Lowercase the first letter of a string
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringUpperFirst } from 'https://deno.land/x/polkadot@0.2.27/util/mod.ts';
 *
 * stringUpperFirst('abc'); // => 'Abc'
 * ```
 */
export const stringUpperFirst = /*#__PURE__*/ converter(CC_TO_UP);
