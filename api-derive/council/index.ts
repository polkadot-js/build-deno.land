
import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.ts';

export * from './votes.ts';
export * from './votesOf.ts';

export type { u32 } from 'https://deno.land/x/polkadot@0.2.31/types/mod.ts';
export type { AccountId } from 'https://deno.land/x/polkadot@0.2.31/types/interfaces/index.ts';

export const members = /*#__PURE__*/ collectiveMembers('council');

export const hasProposals = /*#__PURE__*/ collectiveHasProposals('council');
export const proposal = /*#__PURE__*/ collectiveProposal('council');
export const proposalCount = /*#__PURE__*/ collectiveProposalCount('council');
export const proposalHashes = /*#__PURE__*/ collectiveProposalHashes('council');
export const proposals = /*#__PURE__*/ collectiveProposals('council');

export const prime = /*#__PURE__*/ collectivePrime('council');
