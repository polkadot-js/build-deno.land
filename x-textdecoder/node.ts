
import util from 'node:util';

import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.41/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const TextDecoder = /*#__PURE__*/ extractGlobal('TextDecoder', util.TextDecoder);
