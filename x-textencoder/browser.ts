
import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.39/x-global/mod.ts';

import { TextEncoder as Fallback } from './fallback.ts';

export { packageInfo } from './packageInfo.ts';

export const TextEncoder = /*#__PURE__*/ extractGlobal('TextEncoder', Fallback);
