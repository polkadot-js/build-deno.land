
import { fetch } from 'https://deno.land/x/polkadot@0.2.34/x-fetch/mod.ts';
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.34/x-global/mod.ts';

exposeGlobal('fetch', fetch);
