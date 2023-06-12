
import type { SignOptions } from 'https://deno.land/x/polkadot@0.2.41/keyring/types.ts';
import type { Registry } from 'https://deno.land/x/polkadot@0.2.41/types-codec/types/index.ts';
import type { IKeyringPair } from '../types/index.ts';

export function sign (registry: Registry, signerPair: IKeyringPair, u8a: Uint8Array, options?: SignOptions): Uint8Array {
  const encoded = u8a.length > 256
    ? registry.hash(u8a)
    : u8a;

  return signerPair.sign(encoded, options);
}
