
import ws from 'https://esm.sh/ws@8.18.0';

import { extractGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

/**
 * The built-in `globalThis.WebSocket` in Node.js 22+ does not provide
 * detailed error messages (e.g., `ECONNREFUSED` or `ETIMEDOUT`), making
 * it difficult to implement proper reconnection logic.
 *
 * To avoid these issues, we explicitly use the `ws` library in Node.js 22+
 * while still preserving support for the browser WebSocket API in browser environments.
 *
 * Related Issue: https://github.com/polkadot-js/common/issues/1975
 */
const isNode22 = typeof process !== 'undefined' && parseInt(process.versions?.node?.split('.')[0] || '0', 10) >= 22;

export const WebSocket = isNode22 ? ws : /*#__PURE__*/ extractGlobal('WebSocket', ws);
