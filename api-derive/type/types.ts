// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, DispatchError, DispatchInfo, Event, EventRecord, Extrinsic, Header, SignedBlock } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';

export interface HeaderExtended extends Header {
  readonly author: AccountId | undefined;
  readonly validators: AccountId[] | undefined;
}

export interface SignedBlockExtended extends SignedBlock {
  readonly author: AccountId | undefined;
  readonly events: EventRecord[];
  readonly extrinsics: TxWithEvent[];
}

export interface TxWithEvent {
  dispatchError?: DispatchError;
  dispatchInfo?: DispatchInfo;
  events: Event[];
  extrinsic: Extrinsic;
}
