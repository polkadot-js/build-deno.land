
import ws from 'https://esm.sh/ws@8.13.0';

import { extractGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const WebSocket = /*#__PURE__*/ extractGlobal('WebSocket', ws);
