
import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.ts';

export type { u32 } from 'https://deno.land/x/polkadot@0.2.31/types/mod.ts';
export type { AccountId } from 'https://deno.land/x/polkadot@0.2.31/types/interfaces/index.ts';

export const members = /*#__PURE__*/ collectiveMembers('technicalCommittee');

export const hasProposals = /*#__PURE__*/ collectiveHasProposals('technicalCommittee');
export const proposal = /*#__PURE__*/ collectiveProposal('technicalCommittee');
export const proposalCount = /*#__PURE__*/ collectiveProposalCount('technicalCommittee');
export const proposalHashes = /*#__PURE__*/ collectiveProposalHashes('technicalCommittee');
export const proposals = /*#__PURE__*/ collectiveProposals('technicalCommittee');

export const prime = /*#__PURE__*/ collectivePrime('technicalCommittee');
