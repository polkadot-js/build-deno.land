// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from 'https://deno.land/x/polkadot@0.2.23/api/mod.ts';
import type { SubmittableExtrinsic } from 'https://deno.land/x/polkadot@0.2.23/api-base/types/index.ts';

import { Proposal, ProposalIndex } from 'https://deno.land/x/polkadot@0.2.23/types/interfaces/index.ts';
import { Registry } from 'https://deno.land/x/polkadot@0.2.23/types/types/index.ts';

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
