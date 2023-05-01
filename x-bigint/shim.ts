
import { BigInt } from 'https://deno.land/x/polkadot@0.2.38/x-bigint/mod.ts';
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.38/x-global/mod.ts';

exposeGlobal('BigInt', BigInt);
