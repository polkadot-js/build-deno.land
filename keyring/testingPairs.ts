
import type { KeypairType } from 'https://deno.land/x/polkadot@0.2.45/util-crypto/types.ts';
import type { KeyringOptions, KeyringPair } from './types.ts';

import { nobody } from './pair/nobody.ts';
import { createTestKeyring } from './testing.ts';

export interface TestKeyringMap {
  nobody: KeyringPair;

  [index: string]: KeyringPair;
}

export interface TestKeyringMapSubstrate extends TestKeyringMap {
  alice: KeyringPair;
  bob: KeyringPair;
  charlie: KeyringPair;
  dave: KeyringPair;
  eve: KeyringPair;
  ferdie: KeyringPair;
}

export interface TestKeyringMapEthereum extends TestKeyringMap {
  Alith: KeyringPair;
  Baltathar: KeyringPair;
  Charleth: KeyringPair;
  Dorothy: KeyringPair;
  Ethan: KeyringPair;
  Faith: KeyringPair;
}

export type DetectMap<O extends KeyringOptions | undefined> = DetectPairType<O> extends 'ethereum'
  ? TestKeyringMapEthereum
  : TestKeyringMapSubstrate;

export type DetectPairType<O extends KeyringOptions | undefined> = O extends KeyringOptions
  ? O['type'] extends KeypairType
    ? O['type']
    : 'sr25519'
  : 'sr25519';

export function createTestPairs <O extends KeyringOptions, M = DetectMap<O>> (options?: O, isDerived = true): M {
  const keyring = createTestKeyring(options, isDerived);
  const pairs = keyring.getPairs();
  const map: TestKeyringMap = { nobody: nobody() };

  for (const p of pairs) {
    if (p.meta.name) {
      map[p.meta.name] = p;
    }
  }

  return map as M;
}
