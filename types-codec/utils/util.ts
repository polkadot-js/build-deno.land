// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isFunction } from 'https://deno.land/x/polkadot@0.2.19/util/mod.ts';

export function hasEq (o: unknown): o is { eq: (other: unknown) => boolean } {
  return isFunction((o as { eq: unknown }).eq);
}
