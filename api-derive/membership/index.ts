
import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.ts';

export const members = collectiveMembers('membership');

export const hasProposals = collectiveHasProposals('membership');
export const proposal = collectiveProposal('membership');
export const proposalCount = collectiveProposalCount('membership');
export const proposalHashes = collectiveProposalHashes('membership');
export const proposals = collectiveProposals('membership');

export const prime = collectivePrime('membership');
