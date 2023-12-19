
import type { ApiPromise } from 'https://deno.land/x/polkadot@0.2.45/api/mod.ts';
import type { Bounty, BountyIndex } from 'https://deno.land/x/polkadot@0.2.45/types/interfaces/index.ts';
import type { Codec, CodecClass, InterfaceTypes, Registry } from 'https://deno.land/x/polkadot@0.2.45/types/types/index.ts';

import { Option, StorageKey } from 'https://deno.land/x/polkadot@0.2.45/types/mod.ts';

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
    const typeName = this.#registry.getClassName(value.constructor as CodecClass<T>);

    return new Option<T>(this.#registry, typeName as keyof InterfaceTypes, value);
  };

  public emptyOption = <T extends Codec>(typeName: keyof InterfaceTypes): Option<T> =>
    new Option<T>(this.#registry, typeName);
}
