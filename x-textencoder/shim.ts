
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.37/x-global/mod.ts';
import { TextEncoder } from 'https://deno.land/x/polkadot@0.2.37/x-textencoder/mod.ts';

exposeGlobal('TextEncoder', TextEncoder);
