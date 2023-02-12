
import { objectSpread } from './spread.ts';

/**
 * @name objectCopy
 * @summary Creates a shallow clone of the input object
 */
export function objectCopy <T extends object> (source: T): T {
  return objectSpread({}, source);
}
