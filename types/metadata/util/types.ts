
import type { HexString } from 'https://deno.land/x/polkadot/util/types.ts';

export interface Check {
  compare: Record<string, unknown>;
  data: HexString;
  fails?: string[];
  types?: unknown[];
}
