
import type { KeypairType } from 'https://deno.land/x/polkadot@0.2.41/util-crypto/types.ts';
import type { KeyringPair$Json, KeyringPair$Meta } from '../types.ts';

import { objectSpread } from 'https://deno.land/x/polkadot@0.2.41/util/mod.ts';
import { jsonEncryptFormat } from 'https://deno.land/x/polkadot@0.2.41/util-crypto/mod.ts';

interface PairStateJson {
  address: string;
  meta: KeyringPair$Meta;
}

export function pairToJson (type: KeypairType, { address, meta }: PairStateJson, encoded: Uint8Array, isEncrypted: boolean): KeyringPair$Json {
  return objectSpread(jsonEncryptFormat(encoded, ['pkcs8', type], isEncrypted), {
    address,
    meta
  });
}
