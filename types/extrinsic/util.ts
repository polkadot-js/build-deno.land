
import type { SignOptions } from 'https://deno.land/x/polkadot/keyring/types.ts';
import type { Registry } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { IKeyringPair } from '../types/index.ts';

export function sign (registry: Registry, signerPair: IKeyringPair, u8a: Uint8Array, options?: SignOptions): Uint8Array {
  const encoded = u8a.length > 256
    ? registry.hash(u8a)
    : u8a;

  return signerPair.sign(encoded, options);
}

export function signV5 (registry: Registry, signerPair: IKeyringPair, u8a: Uint8Array, options?: SignOptions): Uint8Array {
  const encoded = registry.hash(u8a);

  return signerPair.sign(encoded, options);
}

export function signGeneral (registry: Registry, u8a: Uint8Array): Uint8Array {
  const encoded = registry.hash(u8a);

  return encoded;
}
