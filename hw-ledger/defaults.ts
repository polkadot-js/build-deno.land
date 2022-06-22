// Copyright 2017-2022 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type Transport from 'https://cdn.skypack.dev/@ledgerhq/hw-transport@6.27.1';
import type { SubstrateApp } from 'https://cdn.skypack.dev/@zondax/ledger-substrate@0.31.0';

import { newAcalaApp, newAstarApp, newBifrostApp, newCentrifugeApp, newComposableApp, newDockApp, newEdgewareApp, newEquilibriumApp, newGenshiroApp, newKaruraApp, newKusamaApp, newNodleApp, newParallelApp, newPolkadexApp, newPolkadotApp, newPolymeshApp, newSoraApp, newStatemineApp, newStatemintApp, newXXNetworkApp } from 'https://cdn.skypack.dev/@zondax/ledger-substrate@0.31.0';

// These match up with the keys of the knownLedger object in the @polkadot/networks/defaults/ledger.ts
export const ledgerApps: Record<string, (transport: Transport) => SubstrateApp> = {
  acala: newAcalaApp,
  astar: newAstarApp,
  bifrost: newBifrostApp,
  centrifuge: newCentrifugeApp,
  composable: newComposableApp,
  'dock-mainnet': newDockApp,
  edgeware: newEdgewareApp,
  equilibrium: newEquilibriumApp,
  genshiro: newGenshiroApp,
  karura: newKaruraApp,
  kusama: newKusamaApp,
  'nodle-para': newNodleApp,
  parallel: newParallelApp,
  polkadex: newPolkadexApp,
  polkadot: newPolkadotApp,
  polymesh: newPolymeshApp,
  sora: newSoraApp,
  statemine: newStatemineApp,
  statemint: newStatemintApp,
  xxnetwork: newXXNetworkApp
};