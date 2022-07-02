// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes, Option, u32, Vec } from 'https://deno.land/x/polkadot@0.0.2/types/mod.ts';
import type { CollatorId, ParaId, ParaInfo, Retriable, UpwardMessage } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { ITuple } from 'https://deno.land/x/polkadot@0.0.2/types/types/index.ts';

export type ParaInfoResult = Option<ParaInfo>;
export type PendingSwap = Option<ParaId>;
export type Active = Vec<ITuple<[ParaId, Option<ITuple<[CollatorId, Retriable]>>]>>;
export type RetryQueue = Vec<Vec<ITuple<[ParaId, CollatorId]>>>
export type SelectedThreads = Vec<Vec<ITuple<[ParaId, CollatorId]>>>
export type Code = Bytes;
export type Heads = Bytes;
export type RelayDispatchQueue = Vec<UpwardMessage>
export type RelayDispatchQueueSize = ITuple<[u32, u32]>;
export type DidUpdate = Option<Vec<ParaId>>;

export interface DeriveParachainActive {
  collatorId: CollatorId;
  isRetriable: boolean;
  retries: number;
}

export interface DeriveParachainInfo extends ParaInfo {
  id: ParaId;
  icon?: string;
  name?: string;
  owner?: string;
}

export interface DeriveParachain {
  didUpdate: boolean;
  pendingSwapId: ParaId | null;
  id: ParaId;
  info: DeriveParachainInfo | null;
  relayDispatchQueueSize?: number;
}

export interface DeriveParachainFull extends DeriveParachain {
  active: DeriveParachainActive | null;
  heads: Bytes | null;
  relayDispatchQueue: UpwardMessage[];
  retryCollators: (CollatorId | null)[];
  selectedCollators: (CollatorId | null)[];
}
