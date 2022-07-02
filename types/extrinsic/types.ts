// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyNumber } from 'https://deno.land/x/polkadot@0.0.2/types-codec/types/index.ts';

export interface ExtrinsicOptions {
  isSigned: boolean;
  version: number;
}

export interface ExtrinsicPayloadOptions {
  version: number;
}

export interface ExtrinsicSignatureOptions {
  isSigned?: boolean;
}

export interface ExtrinsicExtraValue {
  era?: Uint8Array;
  nonce?: AnyNumber;
  tip?: AnyNumber;
}
