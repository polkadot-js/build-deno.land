// Copyright 2017-2022 @polkadot/x-randomvalues authors & contributors
// SPDX-License-Identifier: Apache-2.0

import crypto from 'https://cdn.skypack.dev/crypto';

export { packageInfo } from './packageInfo.ts';

export function getRandomValues <T extends Uint8Array> (output: T): T {
  const bytes = crypto.randomBytes(output.length);

  for (let i = 0; i < bytes.length; i++) {
    output[i] = bytes[i];
  }

  return output;
}
