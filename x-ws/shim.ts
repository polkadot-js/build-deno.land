
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.42/x-global/mod.ts';
import { WebSocket } from 'https://deno.land/x/polkadot@0.2.42/x-ws/mod.ts';

exposeGlobal('WebSocket', WebSocket);
