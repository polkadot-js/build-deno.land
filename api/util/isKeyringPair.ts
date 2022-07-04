// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Address } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { IKeyringPair } from 'https://deno.land/x/polkadot@0.0.3/types/types/index.ts';

import { isFunction } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

export function isKeyringPair (account: string | IKeyringPair | AccountId | Address): account is IKeyringPair {
  return isFunction((account as IKeyringPair).sign);
}
