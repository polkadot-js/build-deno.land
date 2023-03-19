
import type { Balance } from 'https://deno.land/x/polkadot@0.2.32/types/interfaces/index.ts';

export interface DeriveContributions {
  blockHash: string;
  contributorsHex: string[];
}

export type DeriveOwnContributions = Record<string, Balance>;
