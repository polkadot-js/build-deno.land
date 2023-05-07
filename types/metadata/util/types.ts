
import type { HexString } from 'https://deno.land/x/polkadot/util/types.ts';

export interface Check {
  data: HexString;
  fails?: string[];
}
