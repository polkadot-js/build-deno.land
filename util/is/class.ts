
import type { Constructor } from '../types.ts';

import { isOnFunction } from './helpers.ts';

/**
 * @name isClass
 * Tests if the supplied argument is a Class
 */
export const isClass: <T extends Constructor> (value?: unknown) => value is T = /*#__PURE__*/ isOnFunction('isPrototypeOf', 'hasOwnProperty');
