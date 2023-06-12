
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.41/x-global/mod.ts';
import { WebSocket } from 'https://deno.land/x/polkadot@0.2.41/x-ws/mod.ts';

exposeGlobal('WebSocket', WebSocket);
