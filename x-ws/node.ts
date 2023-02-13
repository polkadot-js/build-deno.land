
import ws from 'https://esm.sh/websocket@1.0.34';

import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.27/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const WebSocket = extractGlobal('WebSocket', ws.w3cwebsocket);
