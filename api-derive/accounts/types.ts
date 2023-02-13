
import type { AccountId, AccountIndex, RegistrationJudgement } from 'https://deno.land/x/polkadot@0.2.27/types/interfaces/index.ts';

export type AccountIdAndIndex = [AccountId?, AccountIndex?];

export type AccountIndexes = Record<string, AccountIndex>;

export interface DeriveAccountRegistration {
  display?: string;
  displayParent?: string;
  email?: string;
  image?: string;
  legal?: string;
  other?: Record<string, string>;
  parent?: AccountId;
  pgp?: string;
  riot?: string;
  twitter?: string;
  web?: string;
  judgements: RegistrationJudgement[];
}

export interface DeriveAccountFlags {
  isCouncil: boolean;
  isSociety: boolean;
  isSudo: boolean;
  isTechCommittee: boolean;
}

export interface DeriveAccountInfo {
  accountId?: AccountId;
  accountIndex?: AccountIndex;
  identity: DeriveAccountRegistration;
  nickname?: string;
}

export interface DeriveHasIdentity {
  display?: string;
  hasIdentity: boolean;
  parentId?: string;
}
