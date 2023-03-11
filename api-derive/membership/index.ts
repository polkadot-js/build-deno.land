
import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.ts';

export type { u32 } from 'https://deno.land/x/polkadot/types/mod.ts';
export type { AccountId } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';

export const members = /*#__PURE__*/ collectiveMembers('membership');

export const hasProposals = /*#__PURE__*/ collectiveHasProposals('membership');
export const proposal = /*#__PURE__*/ collectiveProposal('membership');
export const proposalCount = /*#__PURE__*/ collectiveProposalCount('membership');
export const proposalHashes = /*#__PURE__*/ collectiveProposalHashes('membership');
export const proposals = /*#__PURE__*/ collectiveProposals('membership');

export const prime = /*#__PURE__*/ collectivePrime('membership');
