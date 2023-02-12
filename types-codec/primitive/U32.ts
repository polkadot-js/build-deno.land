
import { UInt } from '../base/UInt.ts';

/**
 * @name u32
 * @description
 * A 32-bit unsigned integer
 */
export class u32 extends UInt.with(32) {
  // NOTE without this, we cannot properly determine extensions
  readonly __UIntType = 'u32';
}
