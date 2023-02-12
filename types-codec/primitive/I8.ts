
import { Int } from '../base/Int.ts';

/**
 * @name i8
 * @description
 * An 8-bit signed integer
 */
export class i8 extends Int.with(8) {
  // NOTE without this, we cannot properly determine extensions
  readonly __IntType = 'i8';
}
