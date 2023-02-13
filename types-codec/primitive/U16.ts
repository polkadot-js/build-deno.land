
import { UInt } from '../base/UInt.ts';

/**
 * @name u16
 * @description
 * A 16-bit unsigned integer
 */
export class u16 extends UInt.with(16) {
  // NOTE without this, we cannot properly determine extensions
  readonly __UIntType = 'u16';
}
