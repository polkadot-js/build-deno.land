
import { BigInt } from 'https://deno.land/x/polkadot@0.2.30/x-bigint/mod.ts';
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.30/x-global/mod.ts';

exposeGlobal('BigInt', BigInt);
