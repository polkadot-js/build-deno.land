// Copyright 2017-2022 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type Transport from 'https://esm.sh/@ledgerhq/hw-transport@6.27.1';
import type { SubstrateApp } from 'https://esm.sh/@zondax/ledger-substrate@0.33.0';

import { newAcalaApp, newAlephZeroApp, newAstarApp, newBifrostApp, newCentrifugeApp, newComposableApp, newDockApp, newEdgewareApp, newEquilibriumApp, newGenshiroApp, newInterlayApp, newKaruraApp, newKusamaApp, newNodleApp, newParallelApp, newPolkadexApp, newPolkadotApp, newPolymeshApp, newSoraApp, newStafiApp, newStatemineApp, newStatemintApp, newUniqueApp, newXXNetworkApp } from 'https://esm.sh/@zondax/ledger-substrate@0.33.0';

// These match up with the keys of the knownLedger object in the @polkadot/networks/defaults/ledger.ts
export const ledgerApps: Record<string, (transport: Transport) => SubstrateApp> = {
  acala: newAcalaApp,
  'aleph-node': newAlephZeroApp,
  astar: newAstarApp,
  bifrost: newBifrostApp,
  centrifuge: newCentrifugeApp,
  composable: newComposableApp,
  'dock-mainnet': newDockApp,
  edgeware: newEdgewareApp,
  equilibrium: newEquilibriumApp,
  genshiro: newGenshiroApp,
  'interlay-parachain': newInterlayApp,
  karura: newKaruraApp,
  kusama: newKusamaApp,
  'nodle-para': newNodleApp,
  parallel: newParallelApp,
  polkadex: newPolkadexApp,
  polkadot: newPolkadotApp,
  polymesh: newPolymeshApp,
  sora: newSoraApp,
  stafi: newStafiApp,
  statemine: newStatemineApp,
  statemint: newStatemintApp,
  unique: newUniqueApp,
  xxnetwork: newXXNetworkApp
};
