
import { exposeGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';
import { TextEncoder } from 'https://deno.land/x/polkadot/x-textencoder/mod.ts';

exposeGlobal('TextEncoder', TextEncoder);
