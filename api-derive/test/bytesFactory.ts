
import type { Bytes } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { Registry } from 'https://deno.land/x/polkadot/types/types/index.ts';

export class BytesFactory {
  #registry: Registry;

  constructor (registry: Registry) {
    this.#registry = registry;
  }

  public bytes = (value: string): Bytes => this.#registry.createType('Bytes', value);
}
