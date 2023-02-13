
import util from 'https://deno.land/std@0.161.0/node/util.ts';

import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.27/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const TextDecoder = extractGlobal('TextDecoder', util.TextDecoder);
