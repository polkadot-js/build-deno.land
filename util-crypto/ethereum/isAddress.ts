// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.3/util/types.ts';

import { isHex } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import { isEthereumChecksum } from './isChecksum.ts';

export function isEthereumAddress (address?: HexString | string): boolean {
  if (!address || address.length !== 42 || !isHex(address)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  }

  return isEthereumChecksum(address);
}
