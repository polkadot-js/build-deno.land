
import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.28/x-global/mod.ts';

import { TextEncoder as Fallback } from './fallback.ts';

export { packageInfo } from './packageInfo.ts';

export const TextEncoder = extractGlobal('TextEncoder', Fallback);
