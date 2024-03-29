
import { Float } from '../native/Float.ts';

/**
 * @name f32
 * @description
 * A 32-bit float
 */
export class f32 extends Float.with(32) {
  // NOTE without this, we cannot properly determine extensions
  readonly __FloatType = 'f32';
}
