// Copyright 2017-2023 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Keyring } from './keyring.ts';

// eslint-disable-next-line deprecation/deprecation
export { decodeAddress, encodeAddress, setSS58Format } from 'https://deno.land/x/polkadot@0.2.23/util-crypto/mod.ts';

export * from './defaults.ts';
export { createPair } from './pair/index.ts';
export { packageInfo } from './packageInfo.ts';
export { createTestKeyring } from './testing.ts';
export { createTestPairs } from './testingPairs.ts';

export { Keyring };
