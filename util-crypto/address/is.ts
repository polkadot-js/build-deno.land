// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.9/util/types.ts';
import type { Prefix } from './types.ts';

import { validateAddress } from './validate.ts';

export function isAddress (address?: HexString | string | null, ignoreChecksum?: boolean, ss58Format?: Prefix): address is string {
  try {
    return validateAddress(address, ignoreChecksum, ss58Format);
  } catch (error) {
    return false;
  }
}
