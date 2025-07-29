
import type { SignOptions } from 'https://deno.land/x/polkadot/keyring/types.ts';
import type { Registry } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { IKeyringPair } from '../types/index.ts';

import { blake2AsU8a } from 'https://deno.land/x/polkadot/util-crypto/mod.ts';

export function sign (_registry: Registry, signerPair: IKeyringPair, u8a: Uint8Array, options?: SignOptions): Uint8Array {
  const encoded = u8a.length > 256
    ? blake2AsU8a(u8a)
    : u8a;

  return signerPair.sign(encoded, options);
}

export function signGeneral (registry: Registry, u8a: Uint8Array): Uint8Array {
  const encoded = registry.hash(u8a);

  return encoded;
}
