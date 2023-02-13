
import { Int } from '../base/Int.ts';

/**
 * @name i256
 * @description
 * A 256-bit signed integer
 */
export class i256 extends Int.with(256) {
  // NOTE without this, we cannot properly determine extensions
  readonly __IntType = 'i256';
}
