// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Prefix } from './types.ts';

import { logger } from 'https://deno.land/x/polkadot@0.0.5/util/mod.ts';

import { defaults } from './defaults.ts';

const l = logger('setSS58Format');

/**
 * @description Sets the global SS58 format to use for address encoding
 * @deprecated Use keyring.setSS58Format
 */
export function setSS58Format (prefix: Prefix): void {
  l.warn('Global setting of the ss58Format is deprecated and not recommended. Set format on the keyring (if used) or as part of the address encode function');

  defaults.prefix = prefix;
}
