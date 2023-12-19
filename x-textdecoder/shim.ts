
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.45/x-global/mod.ts';
import { TextDecoder } from 'https://deno.land/x/polkadot@0.2.45/x-textdecoder/mod.ts';

exposeGlobal('TextDecoder', TextDecoder);
