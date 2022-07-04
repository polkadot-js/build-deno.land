// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from 'https://deno.land/x/polkadot@0.0.3/types-codec/types/index.ts';
import type { TypeDef } from 'https://deno.land/x/polkadot@0.0.3/types-create/types/index.ts';
import type { EventMetadataLatest } from '../interfaces/metadata/index.ts';
import type { Hash } from '../interfaces/runtime/index.ts';
import type { EventId, Phase } from '../interfaces/system/index.ts';

export interface IEventRecord<T extends Codec[]> extends Codec {
  readonly phase: Phase;
  readonly event: IEvent<T>;
  readonly topics: Hash[];
}

export interface IEventData extends Codec {
  readonly meta: EventMetadataLatest;
  readonly method: string;
  readonly names: string[] | null;
  readonly section: string;
  readonly typeDef: TypeDef[];
}

export interface IEventLike {
  readonly index: unknown;
  readonly method: unknown;
  readonly section: unknown;
}

export interface IEvent<T extends Codec[], N = unknown> extends IEventLike, Codec {
  readonly data: N extends Record<string, Codec>
    ? N & T & IEventData
    : T & IEventData;
  readonly index: EventId;
  readonly method: string;
  readonly section: string;
}
