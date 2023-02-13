
import { Int } from '../base/Int.ts';

/**
 * @name i32
 * @description
 * A 32-bit signed integer
 */
export class i32 extends Int.with(32) {
  // NOTE without this, we cannot properly determine extensions
  readonly __IntType = 'i32';
}
