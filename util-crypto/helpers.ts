// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.3/util/types.ts';

import { hasBigInt, u8aToHex, u8aToU8a } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import { isReady } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto/mod.ts';

// re-export so TS *.d.ts generation is correct
export type { HexString } from 'https://deno.land/x/polkadot@0.0.3/util/types.ts';

interface DualHash {
  256: (u8a: Uint8Array) => Uint8Array;
  512: (u8a: Uint8Array) => Uint8Array;
}

/** @internal */
export function createAsHex <T extends (...args: never[]) => Uint8Array> (fn: T): (...args: Parameters<T>) => HexString {
  return (...args: Parameters<T>): HexString =>
    u8aToHex(fn(...args));
}

/** @internal */
export function createBitHasher (bitLength: 256 | 512, fn: (data: HexString | Buffer | Uint8Array | string, bitLength: 256 | 512, onlyJs?: boolean) => Uint8Array): (data: HexString | Buffer | Uint8Array | string, onlyJs?: boolean) => Uint8Array {
  return (data: HexString | Buffer | Uint8Array | string, onlyJs?: boolean): Uint8Array =>
    fn(data, bitLength, onlyJs);
}

/** @internal */
export function createDualHasher (wa: DualHash, js: DualHash): (value: HexString | Buffer | Uint8Array | string, bitLength?: 256 | 512, onlyJs?: boolean) => Uint8Array {
  return (value: HexString | Buffer | Uint8Array | string, bitLength: 256 | 512 = 256, onlyJs?: boolean): Uint8Array => {
    const u8a = u8aToU8a(value);

    return !hasBigInt || (!onlyJs && isReady())
      ? wa[bitLength](u8a)
      : js[bitLength](u8a);
  };
}
