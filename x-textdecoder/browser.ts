
import { extractGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';

import { TextDecoder as Fallback } from './fallback.ts';

export { packageInfo } from './packageInfo.ts';

export const TextDecoder = extractGlobal('TextDecoder', Fallback);
