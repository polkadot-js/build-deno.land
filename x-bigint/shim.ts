
import { BigInt } from 'https://deno.land/x/polkadot/x-bigint/mod.ts';
import { exposeGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';

exposeGlobal('BigInt', BigInt);
