
import * as sr25519 from 'https://esm.sh/@scure/sr25519@0.2.0';

import { createDeriveFn } from './derive.ts';

export const sr25519DeriveSoft = /*#__PURE__*/ createDeriveFn(sr25519.HDKD.secretSoft);
