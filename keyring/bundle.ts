
export { decodeAddress, encodeAddress, setSS58Format } from 'https://deno.land/x/polkadot@0.2.45/util-crypto/mod.ts';

export { Keyring } from './keyring.ts';
export { packageInfo } from './packageInfo.ts';
export { createPair } from './pair/index.ts';
export { createTestKeyring } from './testing.ts';
export { createTestPairs } from './testingPairs.ts';

export * from './defaults.ts';
