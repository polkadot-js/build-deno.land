
import nodeCrypto from 'node:crypto';

import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.43/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const crypto = /*#__PURE__*/ extractGlobal('crypto', nodeCrypto.webcrypto);

export function getRandomValues <T extends Uint8Array> (output: T): T {
  return crypto.getRandomValues(output);
}
