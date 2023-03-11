
import { Keyring } from './keyring.ts';

export { decodeAddress, encodeAddress, setSS58Format } from 'https://deno.land/x/polkadot@0.2.30/util-crypto/mod.ts';

export * from './defaults.ts';

export { createPair } from './pair/index.ts';
export { packageInfo } from './packageInfo.ts';
export { createTestKeyring } from './testing.ts';
export { createTestPairs } from './testingPairs.ts';

export { Keyring };
