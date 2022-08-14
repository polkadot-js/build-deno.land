// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, Registry } from '../types/index.ts';

import { u8aToHex } from 'https://deno.land/x/polkadot@0.2.0/util/mod.ts';

/** @internal */
function formatFailure (registry: Registry, result: unknown[], { message }: Error, u8a: Uint8Array, i: number, count: number, Type: CodecClass, key?: string): string {
  let type = '';

  try {
    type = `: ${new Type(registry).toRawType()}`;
  } catch {
    // ignore
  }

  // console.error(JSON.stringify(result, null, 2));

  return `decodeU8a: failed at ${u8aToHex(u8a.subarray(0, 16))}…${key ? ` on ${key}` : ''} (index ${i}/${count})${type}:: ${message}`;
}

/**
 * @internal
 *
 * Given an u8a, and an array of Type constructors, decode the u8a against the
 * types, and return an array of decoded values.
 *
 * @param u8a - The u8a to decode.
 * @param result - The result array (will be returned with values pushed)
 * @param types - The array of CodecClass to decode the U8a against.
 */
export function decodeU8a <T extends Codec = Codec> (registry: Registry, result: T[], u8a: Uint8Array, [Types, keys]: [CodecClass<T>[], string[]]): [T[], number] {
  const count = result.length;
  let offset = 0;
  let i = 0;

  try {
    while (i < count) {
      const value = new Types[i](registry, u8a.subarray(offset));

      offset += value.initialU8aLength || value.encodedLength;
      result[i] = value;
      i++;
    }
  } catch (error) {
    throw new Error(formatFailure(registry, result, error as Error, u8a.subarray(offset), i, count, Types[i], keys[i]));
  }

  return [result, offset];
}

/**
 * @internal
 *
 * Split from decodeU8a since this is specialized to zip returns ... while we duplicate, this
 * is all on the hot-path, so it is not great, however there is (some) method behind the madness
 */
export function decodeU8aStruct (registry: Registry, result: [string, Codec][], u8a: Uint8Array, [Types, keys]: [CodecClass[], string[]]): [[string, Codec][], number] {
  const count = result.length;
  let offset = 0;
  let i = 0;

  try {
    while (i < count) {
      const value = new Types[i](registry, u8a.subarray(offset));

      offset += value.initialU8aLength || value.encodedLength;
      result[i] = [keys[i], value];
      i++;
    }
  } catch (error) {
    throw new Error(formatFailure(registry, result, error as Error, u8a.subarray(offset), i, count, Types[i], keys[i]));
  }

  return [result, offset];
}

/**
 * @internal
 *
 * Split from decodeU8a since this is specialized to 1 instance ... while we duplicate, this
 * is all on the hot-path, so it is not great, however there is (some) method behind the madness
 */
export function decodeU8aVec <T extends Codec = Codec> (registry: Registry, result: unknown[], u8a: Uint8Array, startAt: number, Type: CodecClass<T>): [number, number] {
  const count = result.length;
  let offset = startAt;
  let i = 0;

  try {
    while (i < count) {
      const value = new Type(registry, u8a.subarray(offset));

      offset += value.initialU8aLength || value.encodedLength;
      result[i] = value;
      i++;
    }
  } catch (error) {
    throw new Error(formatFailure(registry, result, error as Error, u8a.subarray(offset), i, count, Type));
  }

  return [offset, offset - startAt];
}
