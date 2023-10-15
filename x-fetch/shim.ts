
import { fetch } from 'https://deno.land/x/polkadot@0.2.43/x-fetch/mod.ts';
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.43/x-global/mod.ts';

exposeGlobal('fetch', fetch);
