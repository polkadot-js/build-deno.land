
import { fetch } from 'https://deno.land/x/polkadot@0.2.39/x-fetch/mod.ts';
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.39/x-global/mod.ts';

exposeGlobal('fetch', fetch);
