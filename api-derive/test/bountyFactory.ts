// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise } from 'https://deno.land/x/polkadot@0.0.0-6/api/mod.ts';
import { Option, StorageKey } from 'https://deno.land/x/polkadot@0.0.0-6/types/mod.ts';
import { Bounty, BountyIndex } from 'https://deno.land/x/polkadot@0.0.0-6/types/interfaces.ts';
import { Codec, Constructor, InterfaceTypes, Registry } from 'https://deno.land/x/polkadot@0.0.0-6/types/types.ts';

export class BountyFactory {
  readonly #api: ApiPromise;
  readonly #registry: Registry;

  constructor (api: ApiPromise) {
    this.#api = api;
    this.#registry = this.#api.registry;
  }

  public storageKey = (index: number): StorageKey => {
    const key = new StorageKey(this.#registry, this.#api.query.bounties.bounties.key(this.bountyIndex(index)));

    return key.setMeta(this.#api.query.bounties.bounties.creator.meta);
  };

  public bountyIndex = (index: number): BountyIndex =>
    this.#registry.createType('BountyIndex', index);

  public defaultBounty = (): Bounty =>
    this.#registry.createType('Bounty');

  public optionOf = <T extends Codec>(value: T): Option<T> => {
    const typeName = this.#registry.getClassName(value.constructor as Constructor<T>);

    return new Option<T>(this.#registry, typeName as keyof InterfaceTypes, value);
  };

  public emptyOption = <T extends Codec>(typeName: keyof InterfaceTypes): Option<T> =>
    new Option<T>(this.#registry, typeName);
}
