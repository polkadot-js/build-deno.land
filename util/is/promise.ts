
import { isOnObject } from './helpers.ts';

export const isPromise = /*#__PURE__*/ isOnObject<Promise<unknown>>('catch', 'then');
