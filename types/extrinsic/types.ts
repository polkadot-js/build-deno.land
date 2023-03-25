
import type { AnyNumber } from 'https://deno.land/x/polkadot@0.2.33/types-codec/types/index.ts';

export interface ExtrinsicOptions {
  isSigned: boolean;
  version: number;
}

export interface ExtrinsicPayloadOptions {
  version: number;
}

export interface ExtrinsicSignatureOptions {
  isSigned?: boolean;
}

export interface ExtrinsicExtraValue {
  era?: Uint8Array;
  nonce?: AnyNumber;
  tip?: AnyNumber;
}
