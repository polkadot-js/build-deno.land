
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.44/x-global/mod.ts';
import { crypto } from 'https://deno.land/x/polkadot@0.2.44/x-randomvalues/mod.ts';

exposeGlobal('crypto', crypto);
