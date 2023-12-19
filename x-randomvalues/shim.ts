
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.45/x-global/mod.ts';
import { crypto } from 'https://deno.land/x/polkadot@0.2.45/x-randomvalues/mod.ts';

exposeGlobal('crypto', crypto);
