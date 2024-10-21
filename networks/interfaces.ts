
import type { KnownSubstrate, Network, SubstrateNetwork } from './types.ts';

import knownSubstrate from 'https://esm.sh/@substrate/ss58-registry@1.51.0';

import { knownGenesis, knownIcon, knownLedger, knownTestnet } from './defaults/index.ts';

const UNSORTED = [0, 2, 42];
const TESTNETS = ['testnet'];

function toExpanded (o: KnownSubstrate): SubstrateNetwork {
  const network = o.network || '';
  const nameParts = network.replace(/_/g, '-').split('-');
  const n = o as SubstrateNetwork;

  // ledger additions
  n.slip44 = knownLedger[network];
  n.hasLedgerSupport = !!n.slip44;

  // general items
  n.genesisHash = knownGenesis[network] || [];
  n.icon = knownIcon[network] || 'substrate';

  // filtering
  n.isTestnet = !!knownTestnet[network] || TESTNETS.includes(nameParts[nameParts.length - 1]);
  n.isIgnored = n.isTestnet || (
    !(
      o.standardAccount &&
      o.decimals?.length &&
      o.symbols?.length
    ) &&
    o.prefix !== 42
  );

  return n;
}

function filterSelectable ({ genesisHash, prefix }: Network): boolean {
  return !!genesisHash.length || prefix === 42;
}

function filterAvailable (n: SubstrateNetwork): n is Network {
  return !n.isIgnored && !!n.network;
}

function sortNetworks (a: Network, b: Network): number {
  const isUnSortedA = UNSORTED.includes(a.prefix);
  const isUnSortedB = UNSORTED.includes(b.prefix);

  return isUnSortedA === isUnSortedB
    ? isUnSortedA
      ? 0
      : a.displayName.localeCompare(b.displayName)
    : isUnSortedA
      ? -1
      : 1;
}

export const allNetworks = knownSubstrate.map(toExpanded);

export const availableNetworks = allNetworks.filter(filterAvailable).sort(sortNetworks);

export const selectableNetworks = availableNetworks.filter(filterSelectable);
