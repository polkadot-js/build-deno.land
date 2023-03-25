
import type { OverrideVersionedType } from 'https://deno.land/x/polkadot@0.2.33/types/types/index.ts';

import centrifugeChain from './centrifuge-chain.ts';
import kusama from './kusama.ts';
import node from './node.ts';
import nodeTemplate from './node-template.ts';
import polkadot from './polkadot.ts';
import rococo from './rococo.ts';
import shell from './shell.ts';
import statemint from './statemint.ts';
import westend from './westend.ts';

const typesSpec: Record<string, OverrideVersionedType[]> = {
  'centrifuge-chain': centrifugeChain,
  kusama,
  node,
  'node-template': nodeTemplate,
  polkadot,
  rococo,
  shell,
  statemine: statemint,
  statemint,
  westend,
  westmint: statemint
};

export default typesSpec;
