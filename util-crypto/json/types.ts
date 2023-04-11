
import type { HexString } from 'https://deno.land/x/polkadot@0.2.35/util/types.ts';

export type EncryptedJsonVersion = '0' | '1' | '2' | '3';

export type EncryptedJsonEncoding = 'none' | 'scrypt' | 'xsalsa20-poly1305';

export interface EncryptedJsonDescriptor {
  content: string[];
  type: EncryptedJsonEncoding | EncryptedJsonEncoding[];
  version: EncryptedJsonVersion;
}

export interface EncryptedJson {
  encoded: HexString | string;
  encoding: EncryptedJsonDescriptor;
}
