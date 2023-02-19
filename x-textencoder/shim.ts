
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.28/x-global/mod.ts';
import { TextEncoder } from 'https://deno.land/x/polkadot@0.2.28/x-textencoder/mod.ts';

exposeGlobal('TextEncoder', TextEncoder);
