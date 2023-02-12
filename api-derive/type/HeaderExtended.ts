
import type { AccountId, Header } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { Registry } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { HeaderExtended } from './types.ts';

import { extractAuthor } from './util.ts';

export function createHeaderExtended (registry: Registry, header?: Header, validators?: AccountId[] | null, author?: AccountId | null): HeaderExtended {
  // an instance of the base extrinsic for us to extend
  const HeaderBase = registry.createClass('Header');

  class Implementation extends HeaderBase implements HeaderExtended {
    readonly #author?: AccountId;

    constructor (registry: Registry, header?: Header, validators?: AccountId[] | null, author?: AccountId | null) {
      super(registry, header);

      this.#author = author || extractAuthor(this.digest, validators || []);
      this.createdAtHash = header?.createdAtHash;
    }

    /**
     * @description Convenience method, returns the author for the block
     */
    public get author (): AccountId | undefined {
      return this.#author;
    }
  }

  return new Implementation(registry, header, validators, author);
}
