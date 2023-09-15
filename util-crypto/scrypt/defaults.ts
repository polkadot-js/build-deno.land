
import type { ScryptParams } from './types.ts';

export const DEFAULT_PARAMS: ScryptParams = {
  N: 1 << 15,
  p: 1,
  r: 8
};
