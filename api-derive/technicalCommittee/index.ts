
import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.ts';

export const members = collectiveMembers('technicalCommittee');

export const hasProposals = collectiveHasProposals('technicalCommittee');
export const proposal = collectiveProposal('technicalCommittee');
export const proposalCount = collectiveProposalCount('technicalCommittee');
export const proposalHashes = collectiveProposalHashes('technicalCommittee');
export const proposals = collectiveProposals('technicalCommittee');

export const prime = collectivePrime('technicalCommittee');
