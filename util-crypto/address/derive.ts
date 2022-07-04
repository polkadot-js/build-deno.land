// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.3/util/types.ts';
import type { DeriveJunction } from '../key/DeriveJunction.ts';
import type { Prefix } from './types.ts';

import { assert } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import { keyExtractPath } from '../key/index.ts';
import { sr25519DerivePublic } from '../sr25519/index.ts';
import { decodeAddress } from './decode.ts';
import { encodeAddress } from './encode.ts';

function filterHard ({ isHard }: DeriveJunction): boolean {
  return isHard;
}

/**
 * @name deriveAddress
 * @summary Creates a sr25519 derived address from the supplied and path.
 * @description
 * Creates a sr25519 derived address based on the input address/publicKey and the uri supplied.
 */
export function deriveAddress (who: HexString | Uint8Array | string, suri: string, ss58Format?: Prefix): string {
  const { path } = keyExtractPath(suri);

  assert(path.length && !path.every(filterHard), 'Expected suri to contain a combination of non-hard paths');

  let publicKey = decodeAddress(who);

  for (const { chainCode } of path) {
    publicKey = sr25519DerivePublic(publicKey, chainCode);
  }

  return encodeAddress(publicKey, ss58Format);
}
