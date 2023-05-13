
import type { ApiPromise } from 'https://deno.land/x/polkadot@0.2.39/api/mod.ts';
import type { SubmittableExtrinsic } from 'https://deno.land/x/polkadot@0.2.39/api-base/types/index.ts';
import type { Proposal, ProposalIndex } from 'https://deno.land/x/polkadot@0.2.39/types/interfaces/index.ts';
import type { Registry } from 'https://deno.land/x/polkadot@0.2.39/types/types/index.ts';

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
