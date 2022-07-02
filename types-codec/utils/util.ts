// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isFunction } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

export function hasEq (o: unknown): o is { eq: (other: unknown) => boolean } {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return isFunction((o as any).eq);
}
