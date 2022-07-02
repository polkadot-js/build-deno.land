// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from 'https://deno.land/x/polkadot@0.0.2/types/types/index.ts';
import type { DecorateFn } from '../types/index.ts';

export function toRxMethod <M extends DecorateFn<Codec>> (method: M): M {
  return method;
}
