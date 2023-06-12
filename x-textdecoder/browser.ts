
import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.41/x-global/mod.ts';

import { TextDecoder as Fallback } from './fallback.ts';

export { packageInfo } from './packageInfo.ts';

export const TextDecoder = /*#__PURE__*/ extractGlobal('TextDecoder', Fallback);
