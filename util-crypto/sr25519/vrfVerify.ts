
import * as sr25519 from 'https://esm.sh/@scure/sr25519@0.2.0';

import { u8aToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';

const EMPTY_U8A = new Uint8Array();

/**
 * @name sr25519VrfVerify
 * @description Verify with sr25519 vrf verification
 */
export function sr25519VrfVerify (message: string | Uint8Array, signOutput: string | Uint8Array, publicKey: string | Uint8Array, context: string | Uint8Array = EMPTY_U8A, extra: string | Uint8Array = EMPTY_U8A): boolean {
  const publicKeyU8a = u8aToU8a(publicKey);
  const proofU8a = u8aToU8a(signOutput);

  if (publicKeyU8a.length !== 32) {
    throw new Error('Invalid publicKey, expected 32-bytes');
  } else if (proofU8a.length !== 96) {
    throw new Error('Invalid vrfSign output, expected 96 bytes');
  }

  return sr25519.vrf.verify(u8aToU8a(message), proofU8a, publicKeyU8a, u8aToU8a(context), u8aToU8a(extra));
}
