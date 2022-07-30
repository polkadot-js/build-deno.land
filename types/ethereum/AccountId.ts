// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyString, AnyU8a, Registry } from 'https://deno.land/x/polkadot@0.0.9/types-codec/types/index.ts';

import { U8aFixed } from 'https://deno.land/x/polkadot@0.0.9/types-codec/mod.ts';
import { hexToU8a, isHex, isString, isU8a, u8aToU8a } from 'https://deno.land/x/polkadot@0.0.9/util/mod.ts';
import { ethereumEncode, isEthereumAddress } from 'https://deno.land/x/polkadot@0.0.9/util-crypto/mod.ts';

/** @internal */
function decodeAccountId (value: AnyU8a | AnyString): AnyU8a {
  if (isU8a(value) || Array.isArray(value)) {
    return u8aToU8a(value);
  } else if (isHex(value) || isEthereumAddress(value.toString())) {
    return hexToU8a(value.toString());
  } else if (isString(value)) {
    return u8aToU8a(value);
  }

  return value;
}

/**
 * @name GenericEthereumAccountId
 * @description
 * A wrapper around an Ethereum-compatible AccountId. Since we are dealing with
 * underlying addresses (20 bytes in length), we extend from U8aFixed which is
 * just a Uint8Array wrapper with a fixed length.
 */
export class GenericEthereumAccountId extends U8aFixed {
  constructor (registry: Registry, value: AnyU8a = new Uint8Array()) {
    super(registry, decodeAccountId(value), 160);
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public override eq (other?: unknown): boolean {
    return super.eq(decodeAccountId(other as AnyU8a));
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (): string {
    return this.toJSON();
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public override toJSON (): string {
    return this.toString();
  }

  /**
   * @description Converts the value in a best-fit primitive form
   */
  public override toPrimitive (): string {
    return this.toJSON();
  }

  /**
   * @description Returns the string representation of the value
   */
  public override toString (): string {
    return ethereumEncode(this);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return 'AccountId';
  }
}
