// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { Codec } from '../types/index.ts';

export interface MetadataInterface<Modules extends Codec> extends Codec {
  pallets: Vec<Modules>;
}
