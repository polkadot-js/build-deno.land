// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Address } from 'https://deno.land/x/polkadot/types/interfaces.ts';
import type { IKeyringPair } from 'https://deno.land/x/polkadot/types/types.ts';

import { isFunction } from 'https://deno.land/x/polkadot/util/mod.ts';

export function isKeyringPair (account: string | IKeyringPair | AccountId | Address): account is IKeyringPair {
  return isFunction((account as IKeyringPair).sign);
}