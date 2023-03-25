
import { Bytes } from 'https://deno.land/x/polkadot@0.2.33/types/mod.ts';
import { Registry } from 'https://deno.land/x/polkadot@0.2.33/types/types/index.ts';

export class BytesFactory {
  #registry: Registry;

  constructor (registry: Registry) {
    this.#registry = registry;
  }

  public bytes = (value: string): Bytes => this.#registry.createType('Bytes', value);
}
