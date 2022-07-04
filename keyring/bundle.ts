// Copyright 2017-2022 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Keyring } from './keyring.ts';

export { decodeAddress, encodeAddress, setSS58Format } from 'https://deno.land/x/polkadot@0.0.3/util-crypto/mod.ts';

export * from './defaults.ts';
export { createPair } from './pair/index.ts';
export { packageInfo } from './packageInfo.ts';
export { createTestKeyring } from './testing.ts';
export { createTestPairs } from './testingPairs.ts';

export { Keyring };
