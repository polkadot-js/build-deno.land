
import { createCmp } from '../bi/helpers.ts';
import { BN } from './bn.ts';

/**
 * @name bnMax
 * @summary Finds and returns the highest value in an array of BNs.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'https://esm.sh/bn.js@5.2.1';
 * import { bnMax } from 'https://deno.land/x/polkadot@0.2.34/util/mod.ts';
 *
 * bnMax([new BN(1), new BN(3), new BN(2)]).toString(); // => '3'
 * ```
 */
export const bnMax = /*#__PURE__*/ createCmp<BN>((a, b) => a.gt(b));

/**
 * @name bnMin
 * @summary Finds and returns the smallest value in an array of BNs.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'https://esm.sh/bn.js@5.2.1';
 * import { bnMin } from 'https://deno.land/x/polkadot@0.2.34/util/mod.ts';
 *
 * bnMin([new BN(1), new BN(3), new BN(2)]).toString(); // => '1'
 * ```
 */
export const bnMin = /*#__PURE__*/ createCmp<BN>((a, b) => a.lt(b));
