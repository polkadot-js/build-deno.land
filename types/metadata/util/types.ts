
import type { HexString } from 'https://deno.land/x/polkadot@0.2.30/util/types.ts';

export interface Check {
  data: HexString;
  fails?: string[];
}
