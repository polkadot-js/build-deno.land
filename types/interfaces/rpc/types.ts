/* eslint-disable */

import type { Struct, Text, Vec, u32 } from 'https://deno.land/x/polkadot@0.2.29/types-codec/mod.ts';

/** @name RpcMethods */
export interface RpcMethods extends Struct {
  readonly version: u32;
  readonly methods: Vec<Text>;
}

export type PHANTOM_RPC = 'rpc';
