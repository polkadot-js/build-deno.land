
import ws from 'https://esm.sh/ws@8.15.1';

import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.45/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const WebSocket = /*#__PURE__*/ extractGlobal('WebSocket', ws);
