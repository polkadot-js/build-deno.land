
import { Int } from '../base/Int.ts';

/**
 * @name i64
 * @description
 * A 64-bit signed integer
 */
export class i64 extends Int.with(64) {
  // NOTE without this, we cannot properly determine extensions
  readonly __IntType = 'i64';
}
