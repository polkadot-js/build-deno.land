// Copyright 2017-2022 @polkadot/x-ws authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { exposeGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';
import { WebSocket } from 'https://deno.land/x/polkadot/x-ws/mod.ts';

exposeGlobal('WebSocket', WebSocket);
