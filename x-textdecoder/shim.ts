
import { exposeGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';
import { TextDecoder } from 'https://deno.land/x/polkadot/x-textdecoder/mod.ts';

exposeGlobal('TextDecoder', TextDecoder);
