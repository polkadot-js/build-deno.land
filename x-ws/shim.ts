
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.45/x-global/mod.ts';
import { WebSocket } from 'https://deno.land/x/polkadot@0.2.45/x-ws/mod.ts';

exposeGlobal('WebSocket', WebSocket);
