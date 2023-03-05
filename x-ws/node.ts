
import ws from 'https://esm.sh/ws@8.12.1';

import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.29/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const WebSocket = /*#__PURE__*/ extractGlobal('WebSocket', ws);
