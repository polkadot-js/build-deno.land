
import type { HexString } from 'https://deno.land/x/polkadot@0.2.42/util/types.ts';

export interface Check {
  data: HexString;
  fails?: string[];
}
