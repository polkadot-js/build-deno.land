// Copyright 2017-2023 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Originally from https://github.com/polkadot-js/extension/pull/743

import type { U8aLike } from '../types.ts';

import { u8aConcatStrict } from './concat.ts';
import { u8aEq } from './eq.ts';
import { u8aToU8a } from './toU8a.ts';

/** @internal */
export const U8A_WRAP_ETHEREUM = u8aToU8a('\x19Ethereum Signed Message:\n');

/** @internal */
export const U8A_WRAP_PREFIX = u8aToU8a('<Bytes>');

/** @internal */
export const U8A_WRAP_POSTFIX = u8aToU8a('</Bytes>');

const WRAP_LEN = U8A_WRAP_PREFIX.length + U8A_WRAP_POSTFIX.length;

/** @internal */
export function u8aIsWrapped (u8a: Uint8Array, withEthereum: boolean): boolean {
  return (
    (
      u8a.length >= WRAP_LEN &&
      u8aEq(u8a.subarray(0, U8A_WRAP_PREFIX.length), U8A_WRAP_PREFIX) &&
      u8aEq(u8a.slice(-U8A_WRAP_POSTFIX.length), U8A_WRAP_POSTFIX)
    ) ||
    (
      withEthereum &&
      u8a.length >= U8A_WRAP_ETHEREUM.length &&
      u8aEq(u8a.subarray(0, U8A_WRAP_ETHEREUM.length), U8A_WRAP_ETHEREUM)
    )
  );
}

/**
 * @name u8aUnwrapBytes
 * @description Removes all <Bytes>...</Bytes> wrappers from the supplied value
 */
export function u8aUnwrapBytes (bytes: U8aLike): Uint8Array {
  const u8a = u8aToU8a(bytes);

  // we don't want to unwrap Ethereum-style wraps
  return u8aIsWrapped(u8a, false)
    ? u8a.subarray(U8A_WRAP_PREFIX.length, u8a.length - U8A_WRAP_POSTFIX.length)
    : u8a;
}

/**
 * @name u8aWrapBytes
 * @description Adds a <Bytes>...</Bytes> wrapper to the supplied value (if not already existing)
 */
export function u8aWrapBytes (bytes: U8aLike): Uint8Array {
  const u8a = u8aToU8a(bytes);

  // if Ethereum-wrapping, we don't add our wrapping bytes
  return u8aIsWrapped(u8a, true)
    ? u8a
    : u8aConcatStrict([U8A_WRAP_PREFIX, u8a, U8A_WRAP_POSTFIX]);
}
