
import type { AccountId, DispatchError, DispatchInfo, Event, EventRecord, Extrinsic, Header, SignedBlock } from 'https://deno.land/x/polkadot@0.2.39/types/interfaces/index.ts';

export interface HeaderExtended extends Header {
  readonly author: AccountId | undefined;
}

export interface SignedBlockExtended extends SignedBlock {
  readonly author: AccountId | undefined;
  readonly events: EventRecord[];
  readonly extrinsics: TxWithEvent[];
}

export interface TxWithEvent {
  dispatchError?: DispatchError | undefined;
  dispatchInfo?: DispatchInfo | undefined;
  events: Event[];
  extrinsic: Extrinsic;
}
