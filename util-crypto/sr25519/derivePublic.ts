
import { isU8a, u8aToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';
import { sr25519DerivePublicSoft } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

export function sr25519DerivePublic (publicKey: string | Uint8Array, chainCode: Uint8Array): Uint8Array {
  const publicKeyU8a = u8aToU8a(publicKey);

  if (!isU8a(chainCode) || chainCode.length !== 32) {
    throw new Error('Invalid chainCode passed to derive');
  } else if (publicKeyU8a.length !== 32) {
    throw new Error(`Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
  }

  return sr25519DerivePublicSoft(publicKeyU8a, chainCode);
}
