
import type { AccountId, AccountIndex, RegistrationJudgement } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';

export type AccountIdAndIndex = [AccountId | undefined, AccountIndex | undefined];

export type AccountIndexes = Record<string, AccountIndex>;

export interface DeriveAccountRegistration {
  display?: string | undefined;
  displayParent?: string | undefined;
  email?: string | undefined;
  image?: string | undefined;
  legal?: string | undefined;
  other?: Record<string, string> | undefined;
  parent?: AccountId | undefined;
  pgp?: string | undefined;
  riot?: string | undefined;
  twitter?: string | undefined;
  web?: string | undefined;
  judgements: RegistrationJudgement[];
}

export interface DeriveAccountFlags {
  isCouncil: boolean;
  isSociety: boolean;
  isSudo: boolean;
  isTechCommittee: boolean;
}

export interface DeriveAccountInfo {
  accountId?: AccountId | undefined;
  accountIndex?: AccountIndex | undefined;
  identity: DeriveAccountRegistration;
  nickname?: string | undefined;
}

export interface DeriveHasIdentity {
  display?: string | undefined;
  hasIdentity: boolean;
  parentId?: string | undefined;
}
