
import { UInt } from '../base/UInt.ts';

/**
 * @name u8
 * @description
 * An 8-bit unsigned integer
 */
export class u8 extends UInt.with(8) {
  // NOTE without this, we cannot properly determine extensions
  readonly __UIntType = 'u8';
}
