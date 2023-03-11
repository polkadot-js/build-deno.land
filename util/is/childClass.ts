
import type { Constructor } from '../types.ts';

import { isClass } from './class.ts';

/**
 * @name isChildClass
 * @summary Tests if the child extends the parent Class
 * @description
 * Checks to see if the child Class extends the parent Class
 * @example
 * <BR>
 *
 * ```javascript
 * import { isChildClass } from 'https://deno.land/x/polkadot@0.2.30/util/mod.ts';
 *
 * console.log('isChildClass', isChildClass(BN, BN); // => true
 * console.log('isChildClass', isChildClass(BN, Uint8Array); // => false
 * ```
 */
export function isChildClass <P extends Constructor> (Parent: P, Child?: Constructor | null | unknown): Child is P {
  // https://stackoverflow.com/questions/30993434/check-if-a-constructor-inherits-another-in-es6/30993664
  return isClass(Child) && isClass(Parent)
    // eslint-disable-next-line no-prototype-builtins
    ? Parent === Child || Parent.isPrototypeOf(Child)
    : false;
}
