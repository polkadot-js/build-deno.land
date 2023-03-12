
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.31/x-global/mod.ts';
import { TextEncoder } from 'https://deno.land/x/polkadot@0.2.31/x-textencoder/mod.ts';

exposeGlobal('TextEncoder', TextEncoder);
