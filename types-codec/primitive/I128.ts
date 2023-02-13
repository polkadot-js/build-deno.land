
import { Int } from '../base/Int.ts';

/**
 * @name i128
 * @description
 * A 128-bit signed integer
 */
export class i128 extends Int.with(128) {
  // NOTE without this, we cannot properly determine extensions
  readonly __IntType = 'i128';
}
