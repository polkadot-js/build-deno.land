// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Signer, SignerResult } from 'https://deno.land/x/polkadot@0.0.3/api/types/index.ts';
import type { KeyringPair } from 'https://deno.land/x/polkadot@0.0.3/keyring/types.ts';
import type { Registry, SignerPayloadJSON, SignerPayloadRaw } from 'https://deno.land/x/polkadot@0.0.3/types/types/index.ts';

import { assert, hexToU8a, u8aToHex } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

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
    assert(payload.address === this.#keyringPair.address, 'Signer does not have the keyringPair');

    return new Promise((resolve): void => {
      setTimeout((): void => {
        const signed = this.#registry.createType('ExtrinsicPayload', payload, { version: payload.version }).sign(this.#keyringPair);

        resolve({
          id: ++id,
          ...signed
        });
      }, this.#signDelay);
    });
  }

  public async signRaw ({ address, data }: SignerPayloadRaw): Promise<SignerResult> {
    assert(address === this.#keyringPair.address, 'Signer does not have the keyringPair');

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
