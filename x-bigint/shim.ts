
import { BigInt } from 'https://deno.land/x/polkadot@0.2.44/x-bigint/mod.ts';
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.44/x-global/mod.ts';

exposeGlobal('BigInt', BigInt);
