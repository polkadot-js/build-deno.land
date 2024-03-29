
import type { ChainUpgrades } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { HexString } from 'https://deno.land/x/polkadot/util/types.ts';
import type { ChainUpgradesExpanded } from './types.ts';

import { selectableNetworks } from 'https://deno.land/x/polkadot/networks/mod.ts';
import { BN, hexToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';

import * as allKnown from './e2e/index.ts';

const NET_EXTRA: Record<string, { genesisHash: HexString[] }> = {
  westend: {
    genesisHash: ['0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e']
  }
};

/** @internal */
function mapRaw ([network, versions]: [string, ChainUpgradesExpanded]): ChainUpgrades {
  const chain = selectableNetworks.find((n) => n.network === network) || NET_EXTRA[network];

  if (!chain) {
    throw new Error(`Unable to find info for chain ${network}`);
  }

  return {
    genesisHash: hexToU8a(chain.genesisHash[0]),
    network,
    versions: versions.map(([blockNumber, specVersion, apis]) => ({
      apis,
      blockNumber: new BN(blockNumber),
      specVersion: new BN(specVersion)
    }))
  };
}

export const upgrades = Object.entries<ChainUpgradesExpanded>(allKnown).map(mapRaw);
