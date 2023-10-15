
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { u32 } from 'https://deno.land/x/polkadot@0.2.43/types/mod.ts';
import type { AccountId, Hash } from 'https://deno.land/x/polkadot@0.2.43/types/interfaces/index.ts';
import type { DeriveApi, DeriveCollectiveProposal } from '../types.ts';

export type Collective = 'allianceMotion' | 'council' | 'membership' | 'technicalCommittee';

export type HasProposalsFnRet = (instanceId: string, api: DeriveApi) => () => Observable<boolean>;
export type HasProposalsFn = (section: Collective) => HasProposalsFnRet;

export type MembersFnRet = (instanceId: string, api: DeriveApi) => () => Observable<AccountId[]>;
export type MembersFn = (section: Collective) => MembersFnRet;

export type PrimeFnRet = (instanceId: string, api: DeriveApi) => () => Observable<AccountId | null>;
export type PrimeFn = (section: Collective) => PrimeFnRet;

export type ProposalFnRet = (instanceId: string, api: DeriveApi) => (hash: Hash | Uint8Array | string) => Observable<DeriveCollectiveProposal | null>;
export type ProposalFn = (section: Collective) => ProposalFnRet;

export type ProposalsFnRet = (instanceId: string, api: DeriveApi) => () => Observable<DeriveCollectiveProposal[]>;
export type ProposalsFn = (section: Collective) => ProposalsFnRet;

export type ProposalCountFnRet = (instanceId: string, api: DeriveApi) => () => Observable<u32 | null>;
export type ProposalCountFn = (section: Collective) => ProposalCountFnRet;

export type ProposalHashesFnRet = (instanceId: string, api: DeriveApi) => () => Observable<Hash[]>;
export type ProposalHashesFn = (section: Collective) => ProposalHashesFnRet;
