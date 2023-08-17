
import { exposeGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';
import { crypto } from 'https://deno.land/x/polkadot/x-randomvalues/mod.ts';

exposeGlobal('crypto', crypto);
