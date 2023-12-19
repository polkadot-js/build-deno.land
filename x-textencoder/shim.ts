
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.45/x-global/mod.ts';
import { TextEncoder } from 'https://deno.land/x/polkadot@0.2.45/x-textencoder/mod.ts';

exposeGlobal('TextEncoder', TextEncoder);
