
import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.45/x-global/mod.ts';

import { TextDecoder as Fallback } from './fallback.ts';

export { packageInfo } from './packageInfo.ts';

export const TextDecoder = /*#__PURE__*/ extractGlobal('TextDecoder', Fallback);
