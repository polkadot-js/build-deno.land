
import { fetch } from 'https://deno.land/x/polkadot/x-fetch/mod.ts';
import { exposeGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';

exposeGlobal('fetch', fetch);
