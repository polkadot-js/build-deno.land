// Copyright 2017-2022 @polkadot/x-ws authors & contributors
// SPDX-License-Identifier: Apache-2.0

import ws from 'https://cdn.skypack.dev/websocket@1.0.34';

import { extractGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const WebSocket = extractGlobal('WebSocket', ws.w3cwebsocket);
