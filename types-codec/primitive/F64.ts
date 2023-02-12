
import { Float } from '../native/Float.ts';

/**
 * @name f64
 * @description
 * A 64-bit float
 */
export class f64 extends Float.with(64) {
  // NOTE without this, we cannot properly determine extensions
  readonly __FloatType = 'f64';
}
