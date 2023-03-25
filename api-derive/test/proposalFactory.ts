
import type { ApiPromise } from 'https://deno.land/x/polkadot@0.2.33/api/mod.ts';
import type { SubmittableExtrinsic } from 'https://deno.land/x/polkadot@0.2.33/api-base/types/index.ts';

import { Proposal, ProposalIndex } from 'https://deno.land/x/polkadot@0.2.33/types/interfaces/index.ts';
import { Registry } from 'https://deno.land/x/polkadot@0.2.33/types/types/index.ts';

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
