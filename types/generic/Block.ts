// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from 'https://deno.land/x/polkadot@0.0.2/types-codec/mod.ts';
import type { AnyNumber, AnyU8a, IU8a, Registry } from 'https://deno.land/x/polkadot@0.0.2/types-codec/types/index.ts';
import type { GenericExtrinsic } from '../extrinsic/Extrinsic.ts';
import type { Digest, DigestItem, Header } from '../interfaces/runtime/index.ts';

import { Struct } from 'https://deno.land/x/polkadot@0.0.2/types-codec/mod.ts';

export interface HeaderValue {
  digest?: Digest | { logs: DigestItem[] | string[] };
  extrinsicsRoot?: AnyU8a;
  number?: AnyNumber;
  parentHash?: AnyU8a;
  stateRoot?: AnyU8a;
}

export interface BlockValue {
  extrinsics?: AnyU8a[];
  header?: HeaderValue;
}

/**
 * @name GenericBlock
 * @description
 * A block encoded with header and extrinsics
 */
export class GenericBlock extends Struct {
  constructor (registry: Registry, value?: BlockValue | Uint8Array) {
    super(registry, {
      header: 'Header',
      // eslint-disable-next-line sort-keys
      extrinsics: 'Vec<Extrinsic>'
    }, value);
  }

  /**
   * @description Encodes a content [[Hash]] for the block
   */
  public get contentHash (): IU8a {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description The [[Extrinsic]] contained in the block
   */
  public get extrinsics (): Vec<GenericExtrinsic> {
    return this.getT('extrinsics');
  }

  /**
   * @description Block/header [[Hash]]
   */
  public override get hash (): IU8a {
    return this.header.hash;
  }

  /**
   * @description The [[Header]] of the block
   */
  public get header (): Header {
    return this.getT('header');
  }
}
