
import { UInt } from '../base/UInt.ts';

/**
 * @name u256
 * @description
 * A 256-bit unsigned integer
 */
export class u256 extends UInt.with(256) {
  // NOTE without this, we cannot properly determine extensions
  readonly __UIntType = 'u256';
}
