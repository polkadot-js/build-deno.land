
import { extractGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';

import { TextEncoder as Fallback } from './fallback.ts';

export { packageInfo } from './packageInfo.ts';

export const TextEncoder = extractGlobal('TextEncoder', Fallback);
