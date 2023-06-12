
import { fetch } from 'https://deno.land/x/polkadot@0.2.41/x-fetch/mod.ts';
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.41/x-global/mod.ts';

exposeGlobal('fetch', fetch);
