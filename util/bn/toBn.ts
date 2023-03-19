
import type { HexString, ToBigInt, ToBn } from '../types.ts';

import { hexToBn } from '../hex/toBn.ts';
import { isBigInt } from '../is/bigInt.ts';
import { isHex } from '../is/hex.ts';
import { isToBigInt } from '../is/toBigInt.ts';
import { isToBn } from '../is/toBn.ts';
import { BN } from './bn.ts';

/**
 * @name bnToBn
 * @summary Creates a BN value from a BN, bigint, string (base 10 or hex) or number input.
 * @description
 * `null` inputs returns a `0x0` result, BN values returns the value, numbers returns a BN representation.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'https://esm.sh/bn.js@5.2.1';
 * import { bnToBn } from 'https://deno.land/x/polkadot@0.2.32/util/mod.ts';
 *
 * bnToBn(0x1234); // => BN(0x1234)
 * bnToBn(new BN(0x1234)); // => BN(0x1234)
 * ```
 */
export function bnToBn <ExtToBn extends ToBigInt | ToBn> (value?: HexString | ExtToBn | BN | bigint | string | number | null): BN {
  return value
    ? BN.isBN(value)
      ? value
      : isHex(value)
        ? hexToBn(value.toString())
        : isBigInt(value)
          ? new BN(value.toString())
          : isToBn(value)
            ? value.toBn()
            : isToBigInt(value)
              ? new BN(value.toBigInt().toString())
              : new BN(value)
    : new BN(0);
}
