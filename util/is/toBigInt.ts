
import type { ToBigInt } from '../types.ts';

import { isOn } from './helpers.ts';

export const isToBigInt = /*#__PURE__*/ isOn<ToBigInt>('toBigInt');
