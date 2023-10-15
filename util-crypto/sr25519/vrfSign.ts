
import type { Keypair } from '../types.ts';

import { u8aToU8a } from 'https://deno.land/x/polkadot@0.2.43/util/mod.ts';
import { vrfSign } from 'https://deno.land/x/polkadot@0.2.43/wasm-crypto/mod.ts';

const EMPTY_U8A = new Uint8Array();

/**
 * @name sr25519VrfSign
 * @description Sign with sr25519 vrf signing (deterministic)
 */
export function sr25519VrfSign (message: string | Uint8Array, { secretKey }: Partial<Keypair>, context: string | Uint8Array = EMPTY_U8A, extra: string | Uint8Array = EMPTY_U8A): Uint8Array {
  if (secretKey?.length !== 64) {
    throw new Error('Invalid secretKey, expected 64-bytes');
  }

  return vrfSign(secretKey, u8aToU8a(context), u8aToU8a(message), u8aToU8a(extra));
}
