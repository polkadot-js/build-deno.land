
import type { Keypair } from '../types.ts';

import { randomBytes } from 'https://esm.sh/@noble/hashes@1.3.3/utils.js';
import * as sr25519 from 'https://esm.sh/@scure/sr25519@0.2.0';

import { u8aToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';

const EMPTY_U8A = new Uint8Array();

/**
 * @name sr25519VrfSign
 * @description Sign with sr25519 vrf signing (deterministic)
 */
export function sr25519VrfSign (message: string | Uint8Array, { secretKey }: Partial<Keypair>, context: string | Uint8Array = EMPTY_U8A, extra: string | Uint8Array = EMPTY_U8A): Uint8Array {
  if (secretKey?.length !== 64) {
    throw new Error('Invalid secretKey, expected 64-bytes');
  }

  return sr25519.vrf.sign(u8aToU8a(message), secretKey, u8aToU8a(context), u8aToU8a(extra), randomBytes);
  // return vrfSign(secretKey, u8aToU8a(context), u8aToU8a(message), u8aToU8a(extra));
}
