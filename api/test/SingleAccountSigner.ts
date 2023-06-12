
import type { KeyringPair } from 'https://deno.land/x/polkadot@0.2.41/keyring/types.ts';
import type { Registry, SignerPayloadJSON, SignerPayloadRaw } from 'https://deno.land/x/polkadot@0.2.41/types/types/index.ts';
import type { Signer, SignerResult } from '../types/index.ts';

import { hexToU8a, objectSpread, u8aToHex } from 'https://deno.land/x/polkadot@0.2.41/util/mod.ts';

let id = 0;

export class SingleAccountSigner implements Signer {
  readonly #keyringPair: KeyringPair;
  readonly #registry: Registry;
  readonly #signDelay: number;

  constructor (registry: Registry, keyringPair: KeyringPair, signDelay = 0) {
    this.#keyringPair = keyringPair;
    this.#registry = registry;
    this.#signDelay = signDelay;
  }

  public async signPayload (payload: SignerPayloadJSON): Promise<SignerResult> {
    if (payload.address !== this.#keyringPair.address) {
      throw new Error('Signer does not have the keyringPair');
    }

    return new Promise((resolve): void => {
      setTimeout((): void => {
        const signed = this.#registry.createType('ExtrinsicPayload', payload, { version: payload.version }).sign(this.#keyringPair);

        resolve(objectSpread({ id: ++id }, signed));
      }, this.#signDelay);
    });
  }

  public async signRaw ({ address, data }: SignerPayloadRaw): Promise<SignerResult> {
    if (address !== this.#keyringPair.address) {
      throw new Error('Signer does not have the keyringPair');
    }

    return new Promise((resolve): void => {
      setTimeout((): void => {
        const signature = u8aToHex(this.#keyringPair.sign(hexToU8a(data)));

        resolve({
          id: ++id,
          signature
        });
      }, this.#signDelay);
    });
  }
}
