// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyFunction } from 'https://deno.land/x/polkadot@0.0.2/types/types/index.ts';

import * as accounts from './accounts/index.ts';
import * as bagsList from './bagsList/index.ts';
import * as balances from './balances/index.ts';
import * as bounties from './bounties/index.ts';
import * as chain from './chain/index.ts';
import * as contracts from './contracts/index.ts';
import * as council from './council/index.ts';
import * as crowdloan from './crowdloan/index.ts';
import * as democracy from './democracy/index.ts';
import * as elections from './elections/index.ts';
import * as imOnline from './imOnline/index.ts';
import * as membership from './membership/index.ts';
import * as parachains from './parachains/index.ts';
import * as session from './session/index.ts';
import * as society from './society/index.ts';
import * as staking from './staking/index.ts';
import * as technicalCommittee from './technicalCommittee/index.ts';
import * as treasury from './treasury/index.ts';
import * as tx from './tx/index.ts';

export const derive = { accounts, bagsList, balances, bounties, chain, contracts, council, crowdloan, democracy, elections, imOnline, membership, parachains, session, society, staking, technicalCommittee, treasury, tx };

type DeriveSection<Section> = {
  [M in keyof Section]: Section[M] extends AnyFunction
    ? ReturnType<Section[M]> // ReturnType<Section[Method]> will be the inner function, i.e. without (api) argument
    : never;
};
type DeriveAllSections<AllSections> = {
  [S in keyof AllSections]: DeriveSection<AllSections[S]>
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExactDerive extends DeriveAllSections<typeof derive> {
  // keep empty, allows for augmentation
}
