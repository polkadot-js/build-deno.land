
import { BN } from 'https://deno.land/x/polkadot@0.2.44/util/mod.ts';

export const FALLBACK_MAX_HASH_COUNT = 250;

export const FALLBACK_PERIOD = new BN(6 * 1000);

export const MAX_FINALITY_LAG = new BN(5);

export const MORTAL_PERIOD = new BN(5 * 60 * 1000);
