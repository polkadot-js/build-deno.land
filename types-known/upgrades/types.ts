
import type { HexString } from 'https://deno.land/x/polkadot@0.2.37/util/types.ts';

export type ChainUpgradesRaw = [blockNumber: number, specVersion: number][];

export type ChainUpgradesExpanded = [blockNumber: number, specVersion: number, runtimeApis: [apiHash: HexString, apiVersion: number][]][];
