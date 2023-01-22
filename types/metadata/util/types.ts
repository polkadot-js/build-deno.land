// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.2.23/util/types.ts';

export interface Check {
  compare: Record<string, unknown>;
  data: HexString;
  fails?: string[];
  types?: unknown[];
}
