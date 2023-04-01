
import type { HexString } from 'https://deno.land/x/polkadot@0.2.34/util/types.ts';

export interface Check {
  data: HexString;
  fails?: string[];
}
