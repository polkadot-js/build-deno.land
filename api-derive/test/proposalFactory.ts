// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from 'https://deno.land/x/polkadot@0.0.2/api/mod.ts';
import type { SubmittableExtrinsic } from 'https://deno.land/x/polkadot@0.0.2/api-base/types/index.ts';

import { Proposal, ProposalIndex } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import { Registry } from 'https://deno.land/x/polkadot@0.0.2/types/types/index.ts';

export class ProposalFactory {
  readonly #api: ApiPromise;
  readonly #registry: Registry;

  constructor (api: ApiPromise) {
    this.#api = api;
    this.#registry = this.#api.registry;
  }

  public createProposal = (method: SubmittableExtrinsic<'promise'>): Proposal => {
    return this.#registry.createType('Proposal', method);
  };

  public proposalIndex = (index: number): ProposalIndex => {
    return this.#registry.createType('ProposalIndex', index);
  };
}
