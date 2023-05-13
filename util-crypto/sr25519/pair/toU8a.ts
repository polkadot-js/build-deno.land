
import type { Keypair } from '../../types.ts';

import { u8aConcat } from 'https://deno.land/x/polkadot/util/mod.ts';

export function sr25519KeypairToU8a ({ publicKey, secretKey }: Keypair): Uint8Array {
  return u8aConcat(secretKey, publicKey).slice();
}
