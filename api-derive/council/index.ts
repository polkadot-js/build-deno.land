
import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.ts';

export * from './votes.ts';
export * from './votesOf.ts';

export const members = collectiveMembers('council');

export const hasProposals = collectiveHasProposals('council');
export const proposal = collectiveProposal('council');
export const proposalCount = collectiveProposalCount('council');
export const proposalHashes = collectiveProposalHashes('council');
export const proposals = collectiveProposals('council');

export const prime = collectivePrime('council');
